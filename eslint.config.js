import { eslint } from '@necodev/eslint'

export default eslint({
  type: 'lib',
  react: true,
  typescript: true,
  ignores: ['playground/**/*'],
})
