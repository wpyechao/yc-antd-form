import { defineConfig } from 'dumi'

export default defineConfig({
  dynamicImport: {},
  title: 'antd-form',
  resolve: {
    includes: [
      'src'
    ]
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ]
  ]
})