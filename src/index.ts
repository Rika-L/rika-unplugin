import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import gradient from 'gradient-string'
import type { Options } from './types'

export const unpluginFactory: UnpluginFactory<Options | undefined> = _options => ({
  name: 'unplugin-starter',
  buildStart() {
    console.log(gradient(['#42b883', '#0074a6']).multiline('\n'
    + '         _                _              _                 _          \n'
    + '        /\\ \\             /\\ \\           /\\_\\              / /\\        \n'
    + '       /  \\ \\            \\ \\ \\         / / /  _          / /  \\       \n'
    + '      / /\\ \\ \\           /\\ \\_\\       / / /  /\\_\\       / / /\\ \\      \n'
    + '     / / /\\ \\_\\         / /\\/_/      / / /__/ / /      / / /\\ \\ \\     \n'
    + '    / / /_/ / /        / / /        / /\\_____/ /      / / /  \\ \\ \\    \n'
    + '   / / /__\\/ /        / / /        / /\\_______/      / / /___/ /\\ \\   \n'
    + '  / / /_____/        / / /        / / /\\ \\ \\        / / /_____/ /\\ \\  \n'
    + ' / / /\\ \\ \\      ___/ / /__      / / /  \\ \\ \\      / /_________/\\ \\ \\ \n'
    + '/ / /  \\ \\ \\    /\\__\\/_/___\\    / / /    \\ \\ \\    / / /_       __\\ \\_\\\n'
    + '\\/_/    \\_\\/    \\/_________/    \\/_/      \\_\\_\\   \\_\\___\\     /____/_/\n'
    + '                                                                      \n'))
  },

})

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
