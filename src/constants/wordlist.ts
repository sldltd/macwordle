import { CONFIG } from './config'

export const WORDS = [
	'CARLE',
	'SCRAN',
	'ROSET',
	'CHAFT',
	'SHUIT',
	'PAIRT',
	'GRUND',
	'GYPIT',
	'BROCH',
	'BIELD',
	'EXACK',
	'SAUCH',
	'FAUSE',
	'MOGER',
	'DROUN',
	'BREID',
	'SCAUD',
	'FADGE',
	'SCAUP',
	'TROKE',
	'DOIST',
	'MANSE',
	'TRYST',
	'SKIRP',
	'LALDY',
	'ROWTH',
	'SCLIM',
	'ELFIN',
	'SHUIR',
	'FOWER',
	'POIND',
	'NICHT',
	'WHAUP',
	'CANTY',
	'HIRST',
	'SYBOE',
	'ASHET',
	'CLYPE',
	'SICHT',
	'LINKS',
	'CAULD',
	'CRAIK',
	'MIDGE',
	'FLAKE',
	'WARSE',
	'BLIRT',
	'CLEGG',
	'BESOM',
	'BIRSE',
	'WENCH',
	'RAMMY',
	'WAULK',
	'MAVIS',
	'MUTCH',
	'FLUDE',
	'WANCE',
	'THIRL',
	'SOLAN',
	'FYKIE',
	'HEAVY',
	'MYOWT',
	'CLART',
	'BANJO',
	'CHIEF',
	'SKELP',
	'SLORK',
	'SHIFT',
	'STOWP',
	'JUIST',
	'DRONE',
	'WIDOE',
	'BOTHY',
	'BRUIT',
	'SCANT',
	'SMERT',
	'ROWST',
	'LITHE',
	'THOLE',
	'GUMPH',
	'LAUCH',
	'POWAN',
	'COBLE',
	'WRACK',
	'ASIDE',
	'DOUCE',
	'CADIE',
	'CLOOT',
	'MYSEL',
	'BUROO',
	'FLAIR',
	'STANE',
	'HAIRT',
	'FOCHT',
	'LYART',
	'CHIRK',
	'ROWIE',
	'LOWIE',
	'SANDY',
	'SCAUR',
	'CHIEL',
	'GOWST',
	'SPEUG',
	'DICHT',
	'CLAES',
	'BURGH',
	'HAUNT',
	'DREEP',
	'AFORE',
	'HYTER',
	'FUGIE',
	'FITBA',
	'MUNRO',
	'AHEID',
	'BLUDE',
	'HAUGH',
	'FURTH',
	'CAKEY',
	'SKIRE',
	'CHOWK',
	'BAULD',
	'BRUNG',
	'CUDDY',
	'WECHT',
	'ROVIE',
	'ARGIE',
	'GLINK',
	'QUOIT',
	'LAIRD',
	'WHAUR',
	'PECHY',
	'PLOOK',
	'BOYNE',
	'BUIST',
	'HIVES',
	'WARLD',
	'SUMPH',
	'AGRUE',
	'GIGOT',
	'AYONT',
	'FLYTE',
	'WEARY',
	'SCROG',
	'FRUSH',
	'KYTHE',
	'GIRSE',
	'BROCK',
	'INTAE',
	'SCUIL',
	'DOVIE',
	'LEARN',
	'INGLE',
	'BAITH',
	'JAKEY',
	'SMOWT',
	'BRUST',
	'DROUK',
	'LAICH',
	'LAIST',
	'WERSH',
	'QUATE',
	'FEART',
	'MONIE',
	'UPTAK',
	'BRAID',
	'LAIGH',
	'AIRCH',
	'CHORE',
	'THRAW',
	'SHAPE',
	'ITSEL',
	'SLAIK',
	'GRAIP',
	'SPAIL',
	'SHANK',
	'WHANG',
	'LOWSE',
	'STAVE ',
	'AIZLE',
	'SCORE',
	'FIRTH',
	'DINGE',
	'TRAIK',
	'PRINK',
	'FOZIE',
	'ROUTH',
	'SNUVE',
	'KNYPE',
	'GRUSH',
	'GUISE',
	'CADGE',
	'PALIE',
	'SHOCK',
	'SHARG',
	'KNOIT',
	'PANEL',
	'CROFT',
	'HEICH',
	'HAUSE',
	'STIRK',
	'IVERY',
	'DWANG',
	'JOUGS',
	'HOAST',
	'ROWAN',
	'CRINE',
	'AGLEY',
	'WEIRD',
	'MULTI',
	'BUIRD',
	'WAUCH',
	'RICHT',
	'FLYPE',
	'CHAPE',
	'HAVER',
	'CUNDY',
	'BODLE',
	'CAIRT',
	'BLUID',
	'ROAST',
	'HOWFF',
	'ANENT',
	'PEUCH',
	'SHUIL',
	'ABLOW',
	'TAWSE',
	'BODIE',
	'NEIST',
	'FRAIK',
	'LICHT',
	'CHIST',
	'DOILT',
	'GOWAN',
	'CHIRT',
	'QUEAN',
	'AWFIE',
	'SWICK',
	'CRAIG',
	'ITHER',
	'MINCE',
	'PLACK',
	'FLING',
	'CLAMP',
	'CLAIK',
	'GLOAM',
	'SKIVE',
	'SMIRR',
	'FLESH',
	'WALIE',
	'DAVER',
	'FREMD',
	'BLATE',
	'BROSE',
	'KILTY',
	'GUDGE',
	'BOSIE',
	'SKITE',
	'RUISE',
	'PLOUK',
	'SAUNT',
	'SHAIF',
	'REACH',
	'CLAUT',
	'HOOSE',
	'THOUM',
	'MUILD',
	'NOUST',
	'JEEZO',
	'CLEUK',
	'CAIRN',
	'WHALP',
	'AFTEN',
	'CHAMP',
	'NIEVE',
	'FAULD',
	'NYAFF',
	'PLAIN',
	'SLOCK',
	'SCARF',
	'GLAIK',
	'DWINE',
	'DRAVE',
	'SCOUK',
	'GLENT',
	'DOWIE',
	'HAIRY',
	'EASIN',
	'MEITH',
	'FLECH',
	'SCOTS',
	'BLEAR',
	'WATER',
	'GAVEL',
	'SCURL',
	'DUMPS',
	'SOUCH',
	'SCONE',
	'STOUR',
	'GLACK',
	'SONSY',
	'YAIRD',
	'SKELB',
	'AHINT',
	'MAINS',
	'FORBY',
	'GLOUP',
	'OUTBY',
	'WRANG',
	'GANSH',
	'TREWS',
	'MAKAR',
	'CLOUT',
	'SWEIR',
	'BOGLE',
	'ATOUR',
	'FLIST',
	'GREAT',
	'WARST',
	'MARCH',
	'LAITH',
	'FLUIR',
	'GAMIE',
	'GLOWE',
	'EMBRO',
	'SPEIR',
	'BLECK',
	'DIVOT',
	'DORIC',
	'QUIRK',
	'GAIRD',
	'CHIRL',
	'UPSET',
	'DUNCH',
	'TORIE',
	'MUDGE',
	'EMBRA',
	'SCRAT',
	'SKIRL',
	'CABER',
	'DAITH',
	'BOGIE',
	'SKEAN',
	'KEECH',
	'GARTH',
	'HUMPH',
	'BOCHT',
	'FIFER',
	'STANK',
	'SPUNE',
	'DEVAL',
	'OXTER',
	'BRAWS',
	'GLAUR',
	'BAIRN',
	'FEUCH',
	'SKICE',
	'CHAPS',
	'PLANK',
	'SYVER',
	'SNECK',
	'MICHT',
	'BOWIE',
	'CHIRM',
	'ONGAE',
	'TEUCH',
	'SKAIL',
	'DOVER',
	'SCUIP',
	'SOWAN',
	'FECHT',
	'SHORE',
	'RADGE',
	'FREIT',
	'SCART',
	'SHOWD',
	'WINCH',
	'SKELF',
	'POLIS',
	'NOCHT',
	'GRUIP',
	'GLEBE',
	'COWER',
	'MAIST',
	'CRUIK',
	'GLISK',
	'PLOWT',
	'BLAWY',
	'COWLD',
	'PLAID',
	'PLASH',
	'HEIST',
	'PECHT',
	'TROSK',
	'GLUMP',
	'KNURL',
	'FIENT',
	'FOUTH',
	'CAIRD',
	'ABUNE',
	'AUCHT',
	'WICHT',
	'PLUNK',
	'AINCE',
	'CLOAK',
	'JINGS',
	'BLASH',
	'GRIST',
	'FLISK',
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
