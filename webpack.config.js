const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
  // 프로젝트를 읽기 시작할 시작점.
  entry: "./js/main.js",

  // 번들된 파일 반환에 관한 설정, path와 filename의 기본값 사용시 별도 명시 필요 X.
  output: {
    // path: path.resolve(__dirname, "dist"),
    // filename: "main.js",
    clean: true // 이전 파일 삭제 여부.
  },

  // 모듈의 처리 방식을 지정한다. 해당하는 확장자의 파일을 지정한 모듈 순서로 처리한다.
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.js$/,
        use: [
          "babel-loader"
        ]
      }
    ]
  },
  
  // 설치한 플러그인에 관한 내용.
  plugins: [
    new HtmlPlugin({
      template: "./index.html"
    }),
    new CopyPlugin({
      patterns: [
        {from: "static"}
      ]
    })
  ],

  // 개발 서버 오픈에 문제가 발생할 때 아래 내용을 추가한다.
  devServer: {
    host: "localhost"
  }
};
