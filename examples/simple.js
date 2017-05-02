var read = require('../src/readability');

read('https://mp.weixin.qq.com/s?__biz=MTQzMjE1NjQwMQ==&mid=2655539011&idx=3&sn=649070570126d38a6c8cc56c018855d2&chksm=66dfe0dd51a869cb0c086dfa3c0d95a723f1b860824a7f4b09cf84fc959a20982db0c509862d&mpshare=1&scene=1&srcid=0314oZn4FVCiYzUUQkaixKCH&pass_ticket=WQCQF01fbzmwzQlyWvBGdSRImd5MNgbP%2Fen4Ec2XLd%2BKV2tessA1VukgrjA9eZ63#rd',
function(err, article, meta) {
  var dom = article.document;
  var html = '<html><head><meta charset="utf-8"><title>'+dom.title+'</title></head><body><h1>'+article.title+'</h1>'+article.content+'</body></html>';
  console.log(html);
  console.log(meta);
});
