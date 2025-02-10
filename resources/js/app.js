import 'unpoly/unpoly.css'
import '@docsearch/css'
import '../css/app.css'

import 'unpoly'
import Alpine from 'alpinejs'

import { themeChange } from 'theme-change'
import ClipboardJS from 'clipboard'

import docsearch from '@docsearch/js'

themeChange()
new ClipboardJS('.btn-clipboard')

// Unpoly
up.link.config.followSelectors.push('a[href]')
up.form.config.submitSelectors.push(['form'])
up.status.config.currentClasses.push(['menu-active'])
up.status.config.navSelectors.push(['nav'])

up.layer.config.drawer.size = 'large'
up.layer.config.drawer.position = 'right'

// Alpine
Alpine.start()

// docsearch
docsearch({
  container: '#docsearch',
  appId: 'UMZPU4KZ1I',
  indexName: 'edge-components',
  apiKey: '97e7c2b7a7dc8498613878efa94d8625',
})
