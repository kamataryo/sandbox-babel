import { __, setLocaleData } from '@wordpress/i18n'
import ja_JP from './languages/ja_JP.json'

const localeData = ja_JP.locale_data['your-domain']
setLocaleData(localeData, 'your-domain')

console.log(__('Translate me!', 'your-domain')) // 翻訳お願い！
