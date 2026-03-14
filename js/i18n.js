(function () {
  const translations = {
    en: {
      nav: { download: 'Download' },
      hero: {
        headline: 'PDF editing, without the overhead.',
        subtitle: 'A free, lightweight editor for Mac and Windows. Text, images, signatures, redaction\u2009—\u2009everything runs on your machine.',
        cta: 'Download for free',
        ctaMac: 'Download for Mac',
        ctaWin: 'Download for Windows',
        free: 'Free',
      },
      features: {
        title: 'Everything you need.\nNothing you don\u2019t.',
        edit: {
          title: 'Edit with precision',
          desc: 'Place text, images, signatures, and stamps exactly where you need them. Pixel-perfect positioning with drag, resize, and rotate.',
        },
        secure: {
          title: 'Private by default',
          desc: 'Everything runs on your machine. No uploads, no cloud processing, no accounts. Your documents stay yours.',
        },
        redact: {
          title: 'Smart redaction',
          desc: 'Auto-detect and mask personal information\u2009—\u2009ID numbers, phone numbers, emails, and account numbers.',
        },
        manage: {
          title: 'Merge & split',
          desc: 'Combine multiple PDFs, extract specific pages, reorder, and add watermarks. All the document operations you need.',
        },
      },
      download: {
        title: 'Ready to try?',
        subtitle: 'Free to use. No account required.',
        macLabel: 'Download for Mac',
        winLabel: 'Download for Windows',
        also: 'Also available for {platform}',
        mobile: 'Visit this page on your computer to download.',
      },
    },

    ko: {
      nav: { download: '\ub2e4\uc6b4\ub85c\ub4dc' },
      hero: {
        headline: '\uad70\ub354\ub354\uae30 \uc5c6\ub294 PDF \ud3b8\uc9d1.',
        subtitle: 'Mac\uacfc Windows\ub97c \uc704\ud55c \ubb34\ub8cc \uacbd\ub7c9 \uc5d0\ub514\ud130. \ud14d\uc2a4\ud2b8, \uc774\ubbf8\uc9c0, \uc11c\uba85, \ub9c8\uc2a4\ud0b9\u2009\u2014\u2009\ubaa8\ub4e0 \uc791\uc5c5\uc740 \ub0b4 \ucef4\ud4e8\ud130\uc5d0\uc11c.',
        cta: '\ubb34\ub8cc \ub2e4\uc6b4\ub85c\ub4dc',
        ctaMac: 'Mac\uc6a9 \ub2e4\uc6b4\ub85c\ub4dc',
        ctaWin: 'Windows\uc6a9 \ub2e4\uc6b4\ub85c\ub4dc',
        free: '\ubb34\ub8cc',
      },
      features: {
        title: '\ud544\uc694\ud55c \uac83\ub9cc.\n\ubd88\ud544\uc694\ud55c \uac74 \uc5c6\uc2b5\ub2c8\ub2e4.',
        edit: {
          title: '\uc815\ud655\ud55c \ud3b8\uc9d1',
          desc: '\ud14d\uc2a4\ud2b8, \uc774\ubbf8\uc9c0, \uc11c\uba85, \uc2a4\ud0ec\ud504\ub97c \uc6d0\ud558\ub294 \uc704\uce58\uc5d0 \uc815\ud655\ud788 \ubc30\uce58\ud558\uc138\uc694. \ub4dc\ub798\uadf8, \ud06c\uae30 \uc870\uc808, \ud68c\uc804\uc73c\ub85c \uc644\ubcbd\ud55c \ud3b8\uc9d1.',
        },
        secure: {
          title: '\uae30\ubcf8\uc801\uc73c\ub85c \ube44\uacf5\uac1c',
          desc: '\ubaa8\ub4e0 \uc791\uc5c5\uc774 \ub0b4 \ucef4\ud4e8\ud130\uc5d0\uc11c \uc2e4\ud589\ub429\ub2c8\ub2e4. \uc5c5\ub85c\ub4dc \uc5c6\uc74c, \ud074\ub77c\uc6b0\ub4dc \uc5c6\uc74c, \uacc4\uc815 \uc5c6\uc74c. \ubb38\uc11c\ub294 \uc624\uc9c1 \ub2f9\uc2e0\uc758 \uac83.',
        },
        redact: {
          title: '\uc2a4\ub9c8\ud2b8 \ub9c8\uc2a4\ud0b9',
          desc: '\uc8fc\ubbfc\ub4f1\ub85d\ubc88\ud638, \uc804\ud654\ubc88\ud638, \uc774\uba54\uc77c, \uacc4\uc88c\ubc88\ud638 \ub4f1 \uac1c\uc778\uc815\ubcf4\ub97c \uc790\ub3d9 \uac10\uc9c0\ud558\uace0 \ub9c8\uc2a4\ud0b9\ud569\ub2c8\ub2e4.',
        },
        manage: {
          title: '\ubcd1\ud569 & \ubd84\ud560',
          desc: '\uc5ec\ub7ec PDF\ub97c \ud569\uce58\uace0, \ud2b9\uc815 \ud398\uc774\uc9c0\ub97c \ucd94\ucd9c\ud558\uace0, \uc21c\uc11c\ub97c \ubcc0\uacbd\ud558\uace0, \uc6cc\ud130\ub9c8\ud06c\ub97c \ucd94\uac00\ud558\uc138\uc694.',
        },
      },
      download: {
        title: '\uc2dc\uc791\ud574 \ubcf4\uc138\uc694',
        subtitle: '\ubb34\ub8cc\ub85c \uc0ac\uc6a9. \uacc4\uc815 \ud544\uc694 \uc5c6\uc74c.',
        macLabel: 'Mac\uc6a9 \ub2e4\uc6b4\ub85c\ub4dc',
        winLabel: 'Windows\uc6a9 \ub2e4\uc6b4\ub85c\ub4dc',
        also: '{platform}\uc6a9\ub3c4 \uc788\uc2b5\ub2c8\ub2e4',
        mobile: '\ucef4\ud4e8\ud130\uc5d0\uc11c \uc774 \ud398\uc774\uc9c0\ub97c \ubc29\ubb38\ud558\uc5ec \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc138\uc694.',
      },
    },

    ja: {
      nav: { download: '\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9' },
      hero: {
        headline: '\u30b7\u30f3\u30d7\u30eb\u306aPDF\u7de8\u96c6\u3002',
        subtitle: 'Mac\u3068Windows\u5bfe\u5fdc\u306e\u7121\u6599\u30a8\u30c7\u30a3\u30bf\u30fc\u3002\u30c6\u30ad\u30b9\u30c8\u3001\u753b\u50cf\u3001\u7f72\u540d\u3001\u58a8\u6d88\u3057\u2009\u2014\u2009\u3059\u3079\u3066\u30ed\u30fc\u30ab\u30eb\u3067\u51e6\u7406\u3002',
        cta: '\u7121\u6599\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9',
        ctaMac: 'Mac\u7248\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9',
        ctaWin: 'Windows\u7248\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9',
        free: '\u7121\u6599',
      },
      features: {
        title: '\u5fc5\u8981\u306a\u3082\u306e\u3060\u3051\u3002\n\u4f59\u8a08\u306a\u3082\u306e\u306f\u306a\u3057\u3002',
        edit: {
          title: '\u7cbe\u5bc6\u306a\u7de8\u96c6',
          desc: '\u30c6\u30ad\u30b9\u30c8\u3001\u753b\u50cf\u3001\u7f72\u540d\u3001\u30b9\u30bf\u30f3\u30d7\u3092\u6b63\u78ba\u306a\u4f4d\u7f6e\u306b\u914d\u7f6e\u3002\u30c9\u30e9\u30c3\u30b0\u3001\u30ea\u30b5\u30a4\u30ba\u3001\u56de\u8ee2\u3067\u5b8c\u74a7\u306a\u7de8\u96c6\u3002',
        },
        secure: {
          title: '\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u512a\u5148',
          desc: '\u3059\u3079\u3066\u304c\u304a\u4f7f\u3044\u306e\u30de\u30b7\u30f3\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u306a\u3057\u3001\u30af\u30e9\u30a6\u30c9\u306a\u3057\u3001\u30a2\u30ab\u30a6\u30f3\u30c8\u4e0d\u8981\u3002',
        },
        redact: {
          title: '\u30b9\u30de\u30fc\u30c8\u58a8\u6d88\u3057',
          desc: '\u30de\u30a4\u30ca\u30f3\u30d0\u30fc\u3001\u96fb\u8a71\u756a\u53f7\u3001\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u3001\u53e3\u5ea7\u756a\u53f7\u306a\u3069\u306e\u500b\u4eba\u60c5\u5831\u3092\u81ea\u52d5\u691c\u51fa\u3057\u3066\u30de\u30b9\u30ad\u30f3\u30b0\u3002',
        },
        manage: {
          title: '\u7d50\u5408\u3068\u5206\u5272',
          desc: '\u8907\u6570\u306ePDF\u3092\u7d50\u5408\u3001\u30da\u30fc\u30b8\u3092\u62bd\u51fa\u3001\u4e26\u3079\u66ff\u3048\u3001\u900f\u304b\u3057\u3092\u8ffd\u52a0\u3002\u5fc5\u8981\u306a\u64cd\u4f5c\u304c\u3059\u3079\u3066\u63c3\u3063\u3066\u3044\u307e\u3059\u3002',
        },
      },
      download: {
        title: '\u8a66\u3057\u3066\u307f\u307e\u305b\u3093\u304b\uff1f',
        subtitle: '\u7121\u6599\u3067\u4f7f\u3048\u307e\u3059\u3002\u30a2\u30ab\u30a6\u30f3\u30c8\u4e0d\u8981\u3002',
        macLabel: 'Mac\u7248\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9',
        winLabel: 'Windows\u7248\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9',
        also: '{platform}\u7248\u3082\u3042\u308a\u307e\u3059',
        mobile: '\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u3067\u3053\u306e\u30da\u30fc\u30b8\u3092\u958b\u3044\u3066\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002',
      },
    },

    'zh-CN': {
      nav: { download: '\u4e0b\u8f7d' },
      hero: {
        headline: '\u7b80\u6d01\u7684PDF\u7f16\u8f91\u5668\u3002',
        subtitle: '\u514d\u8d39\u7684Mac\u548cWindows\u684c\u9762\u5e94\u7528\u3002\u6587\u5b57\u3001\u56fe\u7247\u3001\u7b7e\u540d\u3001\u6d82\u6539\u2009\u2014\u2009\u4e00\u5207\u5728\u672c\u5730\u5b8c\u6210\u3002',
        cta: '\u514d\u8d39\u4e0b\u8f7d',
        ctaMac: '\u4e0b\u8f7dMac\u7248',
        ctaWin: '\u4e0b\u8f7dWindows\u7248',
        free: '\u514d\u8d39',
      },
      features: {
        title: '\u4f60\u9700\u8981\u7684\u90fd\u5728\u3002\n\u4e0d\u9700\u8981\u7684\u90fd\u6ca1\u6709\u3002',
        edit: {
          title: '\u7cbe\u786e\u7f16\u8f91',
          desc: '\u5c06\u6587\u5b57\u3001\u56fe\u7247\u3001\u7b7e\u540d\u548c\u5370\u7ae0\u7cbe\u786e\u653e\u7f6e\u5728\u4efb\u4f55\u4f4d\u7f6e\u3002\u62d6\u62fd\u3001\u8c03\u6574\u5927\u5c0f\u3001\u65cb\u8f6c\uff0c\u50cf\u7d20\u7ea7\u5b9a\u4f4d\u3002',
        },
        secure: {
          title: '\u9ed8\u8ba4\u79c1\u5bc6',
          desc: '\u6240\u6709\u64cd\u4f5c\u5747\u5728\u672c\u5730\u8fd0\u884c\u3002\u65e0\u4e0a\u4f20\u3001\u65e0\u4e91\u5904\u7406\u3001\u65e0\u9700\u8d26\u6237\u3002\u60a8\u7684\u6587\u6863\u59cb\u7ec8\u5c5e\u4e8e\u60a8\u3002',
        },
        redact: {
          title: '\u667a\u80fd\u6d82\u6539',
          desc: '\u81ea\u52a8\u68c0\u6d4b\u5e76\u906e\u76d6\u8eab\u4efd\u8bc1\u53f7\u3001\u7535\u8bdd\u53f7\u7801\u3001\u7535\u5b50\u90ae\u4ef6\u548c\u94f6\u884c\u8d26\u53f7\u7b49\u4e2a\u4eba\u4fe1\u606f\u3002',
        },
        manage: {
          title: '\u5408\u5e76\u4e0e\u62c6\u5206',
          desc: '\u5408\u5e76\u591a\u4e2aPDF\u3001\u63d0\u53d6\u7279\u5b9a\u9875\u9762\u3001\u91cd\u65b0\u6392\u5e8f\u3001\u6dfb\u52a0\u6c34\u5370\u3002\u6240\u6709\u6587\u6863\u64cd\u4f5c\u4e00\u5e94\u4ff1\u5168\u3002',
        },
      },
      download: {
        title: '\u51c6\u5907\u8bd5\u8bd5\uff1f',
        subtitle: '\u514d\u8d39\u4f7f\u7528\u3002\u65e0\u9700\u8d26\u6237\u3002',
        macLabel: '\u4e0b\u8f7dMac\u7248',
        winLabel: '\u4e0b\u8f7dWindows\u7248',
        also: '\u4e5f\u63d0\u4f9b{platform}\u7248',
        mobile: '\u8bf7\u5728\u7535\u8111\u4e0a\u8bbf\u95ee\u6b64\u9875\u9762\u4e0b\u8f7d\u3002',
      },
    },

    'zh-TW': {
      nav: { download: '\u4e0b\u8f09' },
      hero: {
        headline: '\u7c21\u6f54\u7684PDF\u7de8\u8f2f\u5668\u3002',
        subtitle: '\u514d\u8cbb\u7684Mac\u548cWindows\u684c\u9762\u61c9\u7528\u3002\u6587\u5b57\u3001\u5716\u7247\u3001\u7c3d\u540d\u3001\u5857\u6539\u2009\u2014\u2009\u4e00\u5207\u5728\u672c\u6a5f\u5b8c\u6210\u3002',
        cta: '\u514d\u8cbb\u4e0b\u8f09',
        ctaMac: '\u4e0b\u8f09Mac\u7248',
        ctaWin: '\u4e0b\u8f09Windows\u7248',
        free: '\u514d\u8cbb',
      },
      features: {
        title: '\u60a8\u9700\u8981\u7684\u90fd\u5728\u3002\n\u4e0d\u9700\u8981\u7684\u90fd\u6c92\u6709\u3002',
        edit: {
          title: '\u7cbe\u78ba\u7de8\u8f2f',
          desc: '\u5c07\u6587\u5b57\u3001\u5716\u7247\u3001\u7c3d\u540d\u548c\u5370\u7ae0\u7cbe\u78ba\u653e\u7f6e\u5728\u4efb\u4f55\u4f4d\u7f6e\u3002\u62d6\u66f3\u3001\u8abf\u6574\u5927\u5c0f\u3001\u65cb\u8f49\uff0c\u50cf\u7d20\u7d1a\u5b9a\u4f4d\u3002',
        },
        secure: {
          title: '\u9810\u8a2d\u79c1\u5bc6',
          desc: '\u6240\u6709\u64cd\u4f5c\u5747\u5728\u672c\u6a5f\u904b\u884c\u3002\u7121\u4e0a\u50b3\u3001\u7121\u96f2\u7aef\u8655\u7406\u3001\u7121\u9700\u5e33\u865f\u3002\u60a8\u7684\u6587\u4ef6\u59cb\u7d42\u5c6c\u65bc\u60a8\u3002',
        },
        redact: {
          title: '\u667a\u6167\u5857\u6539',
          desc: '\u81ea\u52d5\u5075\u6e2c\u4e26\u906e\u84cb\u8eab\u5206\u8b49\u865f\u3001\u96fb\u8a71\u865f\u78bc\u3001\u96fb\u5b50\u90f5\u4ef6\u548c\u5e33\u865f\u7b49\u500b\u4eba\u8cc7\u8a0a\u3002',
        },
        manage: {
          title: '\u5408\u4f75\u8207\u62c6\u5206',
          desc: '\u5408\u4f75\u591a\u500bPDF\u3001\u64f7\u53d6\u7279\u5b9a\u9801\u9762\u3001\u91cd\u65b0\u6392\u5e8f\u3001\u65b0\u589e\u6c34\u5370\u3002\u6240\u6709\u6587\u4ef6\u64cd\u4f5c\u4e00\u61c9\u4ff1\u5168\u3002',
        },
      },
      download: {
        title: '\u6e96\u5099\u8a66\u8a66\uff1f',
        subtitle: '\u514d\u8cbb\u4f7f\u7528\u3002\u7121\u9700\u5e33\u865f\u3002',
        macLabel: '\u4e0b\u8f09Mac\u7248',
        winLabel: '\u4e0b\u8f09Windows\u7248',
        also: '\u4e5f\u63d0\u4f9b{platform}\u7248',
        mobile: '\u8acb\u5728\u96fb\u8166\u4e0a\u8a2a\u554f\u6b64\u9801\u9762\u4e0b\u8f09\u3002',
      },
    },

    es: {
      nav: { download: 'Descargar' },
      hero: {
        headline: 'Edici\u00f3n de PDF, sin complicaciones.',
        subtitle: 'Editor gratuito y ligero para Mac y Windows. Texto, im\u00e1genes, firmas, redacci\u00f3n\u2009\u2014\u2009todo se ejecuta en tu equipo.',
        cta: 'Descargar gratis',
        ctaMac: 'Descargar para Mac',
        ctaWin: 'Descargar para Windows',
        free: 'Gratis',
      },
      features: {
        title: 'Todo lo que necesitas.\nNada que no.',
        edit: {
          title: 'Edici\u00f3n precisa',
          desc: 'Coloca texto, im\u00e1genes, firmas y sellos exactamente donde los necesites. Posicionamiento perfecto con arrastrar, redimensionar y rotar.',
        },
        secure: {
          title: 'Privado por defecto',
          desc: 'Todo se ejecuta en tu equipo. Sin subidas, sin procesamiento en la nube, sin cuentas. Tus documentos son tuyos.',
        },
        redact: {
          title: 'Redacci\u00f3n inteligente',
          desc: 'Detecta y oculta autom\u00e1ticamente informaci\u00f3n personal: n\u00fameros de identificaci\u00f3n, tel\u00e9fonos, correos y cuentas bancarias.',
        },
        manage: {
          title: 'Combinar y dividir',
          desc: 'Combina m\u00faltiples PDFs, extrae p\u00e1ginas espec\u00edficas, reordena y a\u00f1ade marcas de agua.',
        },
      },
      download: {
        title: '\u00bfListo para probarlo?',
        subtitle: 'Gratis. Sin cuenta necesaria.',
        macLabel: 'Descargar para Mac',
        winLabel: 'Descargar para Windows',
        also: 'Tambi\u00e9n disponible para {platform}',
        mobile: 'Visita esta p\u00e1gina desde tu ordenador para descargar.',
      },
    },

    fr: {
      nav: { download: 'T\u00e9l\u00e9charger' },
      hero: {
        headline: 'L\u2019\u00e9dition PDF, simplifi\u00e9e.',
        subtitle: '\u00c9diteur gratuit et l\u00e9ger pour Mac et Windows. Texte, images, signatures, caviardage\u2009\u2014\u2009tout fonctionne sur votre machine.',
        cta: 'T\u00e9l\u00e9charger gratuitement',
        ctaMac: 'T\u00e9l\u00e9charger pour Mac',
        ctaWin: 'T\u00e9l\u00e9charger pour Windows',
        free: 'Gratuit',
      },
      features: {
        title: 'Tout ce qu\u2019il faut.\nRien de superflu.',
        edit: {
          title: '\u00c9dition pr\u00e9cise',
          desc: 'Placez texte, images, signatures et tampons exactement o\u00f9 vous le souhaitez. Positionnement pixel par pixel.',
        },
        secure: {
          title: 'Priv\u00e9 par d\u00e9faut',
          desc: 'Tout s\u2019ex\u00e9cute sur votre machine. Aucun envoi, aucun cloud, aucun compte. Vos documents restent les v\u00f4tres.',
        },
        redact: {
          title: 'Caviardage intelligent',
          desc: 'D\u00e9tectez et masquez automatiquement les informations personnelles : num\u00e9ros d\u2019identit\u00e9, t\u00e9l\u00e9phones, emails et comptes bancaires.',
        },
        manage: {
          title: 'Fusionner et diviser',
          desc: 'Fusionnez plusieurs PDF, extrayez des pages, r\u00e9ordonnez et ajoutez des filigranes. Toutes les op\u00e9rations essentielles.',
        },
      },
      download: {
        title: 'Pr\u00eat \u00e0 essayer\u00a0?',
        subtitle: 'Gratuit. Aucun compte n\u00e9cessaire.',
        macLabel: 'T\u00e9l\u00e9charger pour Mac',
        winLabel: 'T\u00e9l\u00e9charger pour Windows',
        also: '\u00c9galement disponible pour {platform}',
        mobile: 'Visitez cette page depuis votre ordinateur pour t\u00e9l\u00e9charger.',
      },
    },

    de: {
      nav: { download: 'Download' },
      hero: {
        headline: 'PDF-Bearbeitung, ohne Ballast.',
        subtitle: 'Kostenloser, schlanker Editor f\u00fcr Mac und Windows. Text, Bilder, Unterschriften, Schw\u00e4rzung\u2009\u2014\u2009alles l\u00e4uft lokal.',
        cta: 'Kostenlos herunterladen',
        ctaMac: 'F\u00fcr Mac herunterladen',
        ctaWin: 'F\u00fcr Windows herunterladen',
        free: 'Kostenlos',
      },
      features: {
        title: 'Alles was Sie brauchen.\nNichts, was Sie nicht brauchen.',
        edit: {
          title: 'Pr\u00e4zise Bearbeitung',
          desc: 'Platzieren Sie Text, Bilder, Unterschriften und Stempel genau dort, wo Sie sie brauchen. Pixelgenaue Positionierung.',
        },
        secure: {
          title: 'Standardm\u00e4\u00dfig privat',
          desc: 'Alles l\u00e4uft auf Ihrem Rechner. Kein Upload, keine Cloud, kein Konto. Ihre Dokumente bleiben Ihre.',
        },
        redact: {
          title: 'Intelligente Schw\u00e4rzung',
          desc: 'Erkennen und maskieren Sie automatisch pers\u00f6nliche Daten: Ausweisnummern, Telefonnummern, E-Mails und Kontonummern.',
        },
        manage: {
          title: 'Zusammenf\u00fchren & Aufteilen',
          desc: 'Mehrere PDFs zusammenf\u00fchren, Seiten extrahieren, neu anordnen und Wasserzeichen hinzuf\u00fcgen.',
        },
      },
      download: {
        title: 'Bereit zum Ausprobieren?',
        subtitle: 'Kostenlos nutzbar. Kein Konto erforderlich.',
        macLabel: 'F\u00fcr Mac herunterladen',
        winLabel: 'F\u00fcr Windows herunterladen',
        also: 'Auch verf\u00fcgbar f\u00fcr {platform}',
        mobile: 'Besuchen Sie diese Seite auf Ihrem Computer zum Herunterladen.',
      },
    },

    pt: {
      nav: { download: 'Download' },
      hero: {
        headline: 'Edi\u00e7\u00e3o de PDF, sem complica\u00e7\u00e3o.',
        subtitle: 'Editor gratuito e leve para Mac e Windows. Texto, imagens, assinaturas, reda\u00e7\u00e3o\u2009\u2014\u2009tudo roda na sua m\u00e1quina.',
        cta: 'Baixar gr\u00e1tis',
        ctaMac: 'Baixar para Mac',
        ctaWin: 'Baixar para Windows',
        free: 'Gr\u00e1tis',
      },
      features: {
        title: 'Tudo o que voc\u00ea precisa.\nNada que n\u00e3o precise.',
        edit: {
          title: 'Edi\u00e7\u00e3o precisa',
          desc: 'Posicione texto, imagens, assinaturas e carimbos exatamente onde precisa. Posicionamento perfeito com arrastar, redimensionar e girar.',
        },
        secure: {
          title: 'Privado por padr\u00e3o',
          desc: 'Tudo roda na sua m\u00e1quina. Sem uploads, sem nuvem, sem contas. Seus documentos s\u00e3o seus.',
        },
        redact: {
          title: 'Reda\u00e7\u00e3o inteligente',
          desc: 'Detecte e oculte automaticamente informa\u00e7\u00f5es pessoais: n\u00fameros de identidade, telefones, e-mails e contas banc\u00e1rias.',
        },
        manage: {
          title: 'Mesclar e dividir',
          desc: 'Combine m\u00faltiplos PDFs, extraia p\u00e1ginas espec\u00edficas, reordene e adicione marcas d\u2019\u00e1gua.',
        },
      },
      download: {
        title: 'Pronto para experimentar?',
        subtitle: 'Gratuito. Sem necessidade de conta.',
        macLabel: 'Baixar para Mac',
        winLabel: 'Baixar para Windows',
        also: 'Tamb\u00e9m dispon\u00edvel para {platform}',
        mobile: 'Visite esta p\u00e1gina no seu computador para baixar.',
      },
    },

    vi: {
      nav: { download: 'T\u1ea3i v\u1ec1' },
      hero: {
        headline: 'Ch\u1ec9nh s\u1eeda PDF, \u0111\u01a1n gi\u1ea3n.',
        subtitle: 'Tr\u00ecnh ch\u1ec9nh s\u1eeda mi\u1ec5n ph\u00ed cho Mac v\u00e0 Windows. V\u0103n b\u1ea3n, h\u00ecnh \u1ea3nh, ch\u1eef k\u00fd, che th\u00f4ng tin\u2009\u2014\u2009m\u1ecdi th\u1ee9 ch\u1ea1y tr\u00ean m\u00e1y b\u1ea1n.',
        cta: 'T\u1ea3i mi\u1ec5n ph\u00ed',
        ctaMac: 'T\u1ea3i cho Mac',
        ctaWin: 'T\u1ea3i cho Windows',
        free: 'Mi\u1ec5n ph\u00ed',
      },
      features: {
        title: 'T\u1ea5t c\u1ea3 nh\u1eefng g\u00ec b\u1ea1n c\u1ea7n.\nKh\u00f4ng g\u00ec th\u1eeba.',
        edit: {
          title: 'Ch\u1ec9nh s\u1eeda ch\u00ednh x\u00e1c',
          desc: '\u0110\u1eb7t v\u0103n b\u1ea3n, h\u00ecnh \u1ea3nh, ch\u1eef k\u00fd v\u00e0 con d\u1ea5u ch\u00ednh x\u00e1c v\u1ecb tr\u00ed mong mu\u1ed1n. K\u00e9o th\u1ea3, thay \u0111\u1ed5i k\u00edch th\u01b0\u1edbc, xoay.',
        },
        secure: {
          title: 'Ri\u00eang t\u01b0 theo m\u1eb7c \u0111\u1ecbnh',
          desc: 'M\u1ecdi th\u1ee9 ch\u1ea1y tr\u00ean m\u00e1y b\u1ea1n. Kh\u00f4ng t\u1ea3i l\u00ean, kh\u00f4ng \u0111\u00e1m m\u00e2y, kh\u00f4ng c\u1ea7n t\u00e0i kho\u1ea3n.',
        },
        redact: {
          title: 'Che th\u00f4ng tin th\u00f4ng minh',
          desc: 'T\u1ef1 \u0111\u1ed9ng ph\u00e1t hi\u1ec7n v\u00e0 che gi\u1ea5u s\u1ed1 CMND, s\u1ed1 \u0111i\u1ec7n tho\u1ea1i, email v\u00e0 s\u1ed1 t\u00e0i kho\u1ea3n.',
        },
        manage: {
          title: 'G\u1ed9p v\u00e0 t\u00e1ch',
          desc: 'G\u1ed9p nhi\u1ec1u PDF, tr\u00edch xu\u1ea5t trang, s\u1eafp x\u1ebfp l\u1ea1i v\u00e0 th\u00eam watermark. T\u1ea5t c\u1ea3 thao t\u00e1c c\u1ea7n thi\u1ebft.',
        },
      },
      download: {
        title: 'S\u1eb5n s\u00e0ng th\u1eed?',
        subtitle: 'Mi\u1ec5n ph\u00ed. Kh\u00f4ng c\u1ea7n t\u00e0i kho\u1ea3n.',
        macLabel: 'T\u1ea3i cho Mac',
        winLabel: 'T\u1ea3i cho Windows',
        also: 'C\u0169ng c\u00f3 cho {platform}',
        mobile: 'Truy c\u1eadp trang n\u00e0y tr\u00ean m\u00e1y t\u00ednh \u0111\u1ec3 t\u1ea3i v\u1ec1.',
      },
    },

    th: {
      nav: { download: '\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14' },
      hero: {
        headline: '\u0e41\u0e01\u0e49\u0e44\u0e02 PDF \u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e23\u0e35\u0e22\u0e1a\u0e07\u0e48\u0e32\u0e22',
        subtitle: '\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e41\u0e01\u0e49\u0e44\u0e02\u0e1f\u0e23\u0e35\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Mac \u0e41\u0e25\u0e30 Windows \u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21 \u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e \u0e25\u0e32\u0e22\u0e40\u0e0b\u0e47\u0e19 \u0e01\u0e32\u0e23\u0e1b\u0e34\u0e14\u0e1a\u0e31\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u2009\u2014\u2009\u0e17\u0e38\u0e01\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e17\u0e33\u0e07\u0e32\u0e19\u0e1a\u0e19\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13',
        cta: '\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14\u0e1f\u0e23\u0e35',
        ctaMac: '\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Mac',
        ctaWin: '\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Windows',
        free: '\u0e1f\u0e23\u0e35',
      },
      features: {
        title: '\u0e17\u0e38\u0e01\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e17\u0e35\u0e48\u0e04\u0e38\u0e13\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\n\u0e44\u0e21\u0e48\u0e21\u0e35\u0e2a\u0e34\u0e48\u0e07\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19',
        edit: {
          title: '\u0e41\u0e01\u0e49\u0e44\u0e02\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e41\u0e21\u0e48\u0e19\u0e22\u0e33',
          desc: '\u0e27\u0e32\u0e07\u0e02\u0e49\u0e2d\u0e04\u0e27\u0e32\u0e21 \u0e23\u0e39\u0e1b\u0e20\u0e32\u0e1e \u0e25\u0e32\u0e22\u0e40\u0e0b\u0e47\u0e19 \u0e41\u0e25\u0e30\u0e15\u0e23\u0e32\u0e1b\u0e23\u0e30\u0e17\u0e31\u0e1a\u0e44\u0e14\u0e49\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e41\u0e21\u0e48\u0e19\u0e22\u0e33 \u0e25\u0e32\u0e01 \u0e1b\u0e23\u0e31\u0e1a\u0e02\u0e19\u0e32\u0e14 \u0e2b\u0e21\u0e38\u0e19',
        },
        secure: {
          title: '\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e48\u0e27\u0e19\u0e15\u0e31\u0e27\u0e42\u0e14\u0e22\u0e04\u0e48\u0e32\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e49\u0e19',
          desc: '\u0e17\u0e38\u0e01\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e17\u0e33\u0e07\u0e32\u0e19\u0e1a\u0e19\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13 \u0e44\u0e21\u0e48\u0e2d\u0e31\u0e1e\u0e42\u0e2b\u0e25\u0e14 \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e49\u0e04\u0e25\u0e32\u0e27\u0e14\u0e4c \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e1a\u0e31\u0e0d\u0e0a\u0e35',
        },
        redact: {
          title: '\u0e1b\u0e34\u0e14\u0e1a\u0e31\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2d\u0e31\u0e08\u0e09\u0e23\u0e34\u0e22\u0e30',
          desc: '\u0e15\u0e23\u0e27\u0e08\u0e08\u0e31\u0e1a\u0e41\u0e25\u0e30\u0e1b\u0e34\u0e14\u0e1a\u0e31\u0e07\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2a\u0e48\u0e27\u0e19\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e42\u0e14\u0e22\u0e2d\u0e31\u0e15\u0e42\u0e19\u0e21\u0e31\u0e15\u0e34 \u0e40\u0e25\u0e02\u0e1a\u0e31\u0e15\u0e23\u0e1b\u0e23\u0e30\u0e0a\u0e32\u0e0a\u0e19 \u0e40\u0e1a\u0e2d\u0e23\u0e4c\u0e42\u0e17\u0e23 \u0e2d\u0e35\u0e40\u0e21\u0e25',
        },
        manage: {
          title: '\u0e23\u0e27\u0e21\u0e41\u0e25\u0e30\u0e41\u0e22\u0e01',
          desc: '\u0e23\u0e27\u0e21\u0e2b\u0e25\u0e32\u0e22 PDF \u0e41\u0e22\u0e01\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e23\u0e35\u0e22\u0e07\u0e43\u0e2b\u0e21\u0e48 \u0e41\u0e25\u0e30\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e25\u0e32\u0e22\u0e19\u0e49\u0e33 \u0e04\u0e23\u0e1a\u0e17\u0e38\u0e01\u0e01\u0e32\u0e23\u0e17\u0e33\u0e07\u0e32\u0e19\u0e17\u0e35\u0e48\u0e08\u0e33\u0e40\u0e1b\u0e47\u0e19',
        },
      },
      download: {
        title: '\u0e1e\u0e23\u0e49\u0e2d\u0e21\u0e25\u0e2d\u0e07\u0e2b\u0e23\u0e37\u0e2d\u0e22\u0e31\u0e07?',
        subtitle: '\u0e43\u0e0a\u0e49\u0e1f\u0e23\u0e35 \u0e44\u0e21\u0e48\u0e15\u0e49\u0e2d\u0e07\u0e2a\u0e21\u0e31\u0e04\u0e23\u0e1a\u0e31\u0e0d\u0e0a\u0e35',
        macLabel: '\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Mac',
        winLabel: '\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a Windows',
        also: '\u0e22\u0e31\u0e07\u0e21\u0e35\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a {platform}',
        mobile: '\u0e40\u0e02\u0e49\u0e32\u0e0a\u0e21\u0e2b\u0e19\u0e49\u0e32\u0e19\u0e35\u0e49\u0e1a\u0e19\u0e04\u0e2d\u0e21\u0e1e\u0e34\u0e27\u0e40\u0e15\u0e2d\u0e23\u0e4c\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e14\u0e32\u0e27\u0e19\u0e4c\u0e42\u0e2b\u0e25\u0e14',
      },
    },
  };

  const langLabels = {
    en: 'EN',
    ko: '\ud55c',
    ja: '\u65e5',
    'zh-CN': '\u7b80',
    'zh-TW': '\u7e41',
    es: 'ES',
    fr: 'FR',
    de: 'DE',
    pt: 'PT',
    vi: 'VI',
    th: '\u0e44\u0e17',
  };

  let currentLang = 'en';

  function detectLanguage() {
    var saved = localStorage.getItem('olivepdf-lang');
    if (saved && translations[saved]) return saved;

    var nav = navigator.language || (navigator.languages && navigator.languages[0]) || 'en';
    var lang = nav.toLowerCase();

    if (lang.startsWith('ko')) return 'ko';
    if (lang.startsWith('ja')) return 'ja';
    if (lang === 'zh-cn' || lang === 'zh-hans' || lang.startsWith('zh-cn')) return 'zh-CN';
    if (lang === 'zh-tw' || lang === 'zh-hant' || lang.startsWith('zh-tw') || lang.startsWith('zh')) return 'zh-TW';
    if (lang.startsWith('es')) return 'es';
    if (lang.startsWith('fr')) return 'fr';
    if (lang.startsWith('de')) return 'de';
    if (lang.startsWith('pt')) return 'pt';
    if (lang.startsWith('vi')) return 'vi';
    if (lang.startsWith('th')) return 'th';
    return 'en';
  }

  function t(key) {
    var keys = key.split('.');
    var val = translations[currentLang];
    for (var i = 0; i < keys.length; i++) {
      if (val === undefined || val === null) break;
      val = val[keys[i]];
    }
    if (val !== undefined && val !== null) return val;

    // Fallback to English
    val = translations['en'];
    for (var j = 0; j < keys.length; j++) {
      if (val === undefined || val === null) break;
      val = val[keys[j]];
    }
    return val || key;
  }

  function updateDOM() {
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      var text = t(key);
      if (text.indexOf('\n') !== -1) {
        els[i].innerHTML = text.replace(/\n/g, '<br>');
      } else {
        els[i].textContent = text;
      }
    }
    // Update page title
    document.title = 'OlivePDF \u2014 ' + t('hero.headline').replace(/\n/g, ' ');
  }

  function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('olivepdf-lang', lang);
    updateDOM();
  }

  function getCurrentLang() {
    return currentLang;
  }

  window.I18n = {
    detectLanguage: detectLanguage,
    t: t,
    setLang: setLang,
    getCurrentLang: getCurrentLang,
    updateDOM: updateDOM,
    langLabels: langLabels,
  };
})();
