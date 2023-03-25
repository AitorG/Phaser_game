import WebFontLoader from 'webfontloader'

export default class WebFontFile extends Phaser.Loader.File {
  constructor(loader, fontNames) {
    super(loader, {
      type: 'webfont',
      key: fontNames.toString(),
    })

    this.fontNames = Array.isArray(fontNames) ? fontNames : [fontNames]
    this.fontsLoadedCount = 0
  }

  load() {
    const config = {
      fontactive: (familyName) => {
        this.checkLoadedFonts(familyName)
      },
      fontinactive: (familyName) => {
        this.checkLoadedFonts(familyName)
      },
      custom: {
        families: this.fontNames
      }
    }
    WebFontLoader.load(config)
  }

  checkLoadedFonts(familyName) {
    if (this.fontNames.indexOf(familyName) < 0) {
      return
    }

    ++this.fontsLoadedCount
    if (this.fontsLoadedCount >= this.fontNames.length) {
      this.loader.nextFile(this, true)
    }
  }

}