const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  return await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['@ui-kitten/components'],
      },
    },
    argv
  )
}
