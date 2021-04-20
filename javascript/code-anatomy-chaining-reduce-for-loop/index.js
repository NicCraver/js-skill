// 需求
// input
// [ 'foo.txt ', '.bar', '   ', 'baz.foo' ];
// output
// [ '~/cool_app/foo.txt', '~/cool_app/.bar', '~/cool_app/baz.foo']

const files = ['foo.txt ', '.bar', '   ', 'baz.foo']

// loops
function forLoops() {
  const result = []
  for (const file of files) {
    const fileName = file.trim()
    if (fileName) {
      const filePath = `~/cool_app/${fileName}`
      result.push(filePath)
    }
  }
  console.log(`result`, result)
}

// forLoops()

// reduce
function reduceWay() {
  const filePaths = files.reduce((result, file) => {
    const fileName = file.trim()
    if (fileName) {
      const filePath = `~/cool_app/${fileName}`
      result.push(filePath)
    }
    return result
  }, [])
  console.log(`filePaths`, filePaths)
}
reduceWay()

// 链式编程
function chain() {
  const filePaths = files
    .map((file) => file.trim())
    .filter(Boolean)
    .map((fileName) => `~/cool_app/${fileName}`)
    console.log(`filePaths`, filePaths)
}
