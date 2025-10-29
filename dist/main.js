var $1FWPs$exifr = require("exifr");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "fixBySelector", () => $2d80769cbe24e221$export$333f7af172343a1);
$parcel$export(module.exports, "fixImgFile", () => $2d80769cbe24e221$export$9fe3fb24d050ce98);

const $2d80769cbe24e221$var$getURLBase64 = function(url) {
    return new Promise((resolve, reject)=>{
        let xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function() {
            if (this.status === 200) {
                let blob = this.response;
                let fileReader = new FileReader();
                fileReader.onloadend = function(e) {
                    let result = e.target.result;
                    resolve(result);
                };
                fileReader.readAsDataURL(blob);
            }
        };
        xhr.onerror = function(err) {
            reject(err);
        };
        xhr.send();
    });
};
const $2d80769cbe24e221$var$getOri = function(file) {
    return new Promise((resolve)=>{
        (0, ($parcel$interopDefault($1FWPs$exifr))).parse(file).then((e)=>{
            resolve(e?.Orientation);
        });
    });
};
const $2d80769cbe24e221$var$imgToCanvas = function(img, orientation) {
    const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d'), targetWidth = img.targetWidth || img.width, targetHeight = img.targetHeight || img.height;
    if (orientation === 6) {
        canvas.width = targetHeight;
        canvas.height = targetWidth;
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(Math.PI / 180 * 90);
        ctx.drawImage(img, -targetWidth / 2, -targetHeight / 2, canvas.height, canvas.width);
    } else {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
    return new Promise((resolve)=>{
        resolve(canvas);
    });
};
const $2d80769cbe24e221$export$333f7af172343a1 = function(selector) {
    const fixImg = function(img) {
        if (!img.dataset.iosfixed) $2d80769cbe24e221$var$getOri(img).then((orientation)=>{
            if (orientation == 6) $2d80769cbe24e221$var$imgToCanvas(img, orientation).then((canvas)=>{
                try {
                    img.src = canvas.toDataURL();
                    img.dataset.iosfixed = true;
                } catch (e) {
                    $2d80769cbe24e221$var$getURLBase64(img.src).then((base64)=>{
                        img.onload = function() {
                            if (!img.dataset.iosfixed) $2d80769cbe24e221$var$imgToCanvas(img, orientation).then((canvas)=>{
                                img.src = canvas.toDataURL();
                                img.dataset.iosfixed = true;
                            });
                        };
                        img.src = base64;
                    });
                }
            });
        });
    };
    let imgs = document.querySelectorAll(selector);
    if (imgs.length) for(let i = 0; i < imgs.length; i++){
        let img = imgs[i];
        if (img.tagName.toLowerCase() === 'img') {
            img.crossOrigin = "Anonymous";
            if (img.complete) fixImg(img);
            else img.onload = function() {
                fixImg(img);
            };
        }
    }
    else console.log('fixer WARN no files:' + selector);
};
const $2d80769cbe24e221$var$computeSize = function(originWidth, originHeight, maxWidth, maxHeight) {
    let targetWidth = originWidth, targetHeight = originHeight;
    const setWidth = function() {
        targetWidth = maxWidth;
        targetHeight = Math.round(maxWidth * (originHeight / originWidth));
    }, setHeight = function() {
        targetHeight = maxHeight;
        targetWidth = Math.round(maxHeight * (originWidth / originHeight));
    };
    if (maxWidth && maxHeight) //限定区间
    {
        if (originWidth > maxWidth || originHeight > maxHeight) {
            if (originWidth / originHeight > maxWidth / maxHeight) // 更宽
            setWidth();
            else // 更高
            setHeight();
        }
    } else if (maxWidth) //限定宽度
    setWidth();
    else if (maxHeight) //限定高度
    setHeight();
    return {
        width: targetWidth,
        height: targetHeight
    };
};
const $2d80769cbe24e221$export$9fe3fb24d050ce98 = function(file, option) {
    const opt = Object.assign({
        maxWidth: null,
        maxHeight: null,
        ratio: 2,
        outType: 'base64' // base64 | blob
    }, option || {});
    return new Promise((resolve, reject)=>{
        if (file.type.indexOf('image/') === 0) $2d80769cbe24e221$var$getOri(file).then((orientation)=>{
            let oReader = new FileReader();
            oReader.onload = function(e) {
                let base64 = e.target.result;
                let img = document.createElement('img');
                img.onload = function() {
                    if (opt.maxWidth || opt.maxHeight) {
                        let compressSize;
                        if (orientation === 6) {
                            compressSize = $2d80769cbe24e221$var$computeSize(img.height, img.width, opt.maxWidth, opt.maxHeight);
                            img.targetWidth = compressSize.height;
                            img.targetHeight = compressSize.width;
                        } else {
                            compressSize = $2d80769cbe24e221$var$computeSize(img.width, img.height, opt.maxWidth, opt.maxHeight);
                            img.targetWidth = compressSize.width;
                            img.targetHeight = compressSize.height;
                        }
                    }
                    $2d80769cbe24e221$var$imgToCanvas(img, orientation).then((canvas)=>{
                        if (opt.outType === 'blob') canvas.toBlob(resolve, 'image/jpeg', opt.ratio);
                        else resolve(canvas.toDataURL('image/jpeg', opt.ratio));
                    });
                };
                img.src = base64;
            };
            oReader.readAsDataURL(file);
        }).catch((err)=>{
            reject(err);
        });
        else reject("\u975E\u56FE\u7247\u6587\u4EF6\u4E0D\u652F\u6301\u538B\u7F29");
    });
};


//# sourceMappingURL=main.js.map
