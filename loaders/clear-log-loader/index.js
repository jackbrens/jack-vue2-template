module.exports = function (content, map, meta) {
  return content.replace(/console\.log\(.*\);?/g, '')
}