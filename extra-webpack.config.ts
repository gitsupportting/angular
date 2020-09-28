import webpack from 'webpack';
import tailwindcss from 'tailwindcss';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';

export default (config: webpack.Configuration) => {
  const plugins = [
    tailwindcss('./tailwind.config.js')
  ];

  if (config.mode === 'production') {
    const tmp: any = purgeCSSPlugin;
    plugins.push(tmp({
      content: [
        './src/**/*.html',
        './src/**/*.component.ts',
      ],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      whitelistPatterns: [
        /^((hover|focus|active|disabled|visited|first|last):)*bg-risk-[0-7]$/,
        /^border-risk-[0-7]$/
      ],
    }));
  }

  config.module.rules.push({
    test: /tailwind\.css$/,
    use: [
      {
        loader: 'postcss-loader',
        options: {
          plugins
        }
      }
    ]
  });

  return config;
};
