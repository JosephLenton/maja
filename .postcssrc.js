module.exports = {
  plugins: [
    require('postcss-custom-media')({
      importFrom: {
        customMedia: {
          '--media-mobile': '(max-width: 767px)',
          '--media-mobile-small': '(max-width: 340px) and (max-height: 660px)',

          '--media-small': '(min-width: 380px)',
          '--media-medium': '(min-width: 768px)',
          '--media-medium-large': '(min-width: 968px)',
          '--media-large': '(min-width: 1024px)',
          '--media-very-large': '(min-width: 1440px)',
        },
      },
    }),
    require('postcss-extend')(),
    require('postcss-nested-ancestors')(),
    require('postcss-nested')(),
    require('autoprefixer')({
      grid: true,
    }),
  ],
}
