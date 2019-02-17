// basic regex for any url
var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\(\)\/%?=~_|!:,.;]*[-A-Z0-9+&\(\)@#\/%=~_|])/ig;

var xterm256_colors = ["Black", "Red", "Green", "Yellow", "Blue", "Magenta", "Cyan", "White", "Grey", "RedBright", "GreenBright", "YellowBright", "BlueBright", "MagentaBright", "CyanBright", "WhiteBright", "BlackGrey", "BlueNavy", "BlueDark", "BlueMostlyDark", "BlueMediumDark", "BlueDarkLight", "GreenForestMostlyDark", "BlueSilver", "BlueDeepSkyDark", "BlueDeepSkyMedium", "BlueDodgerDark", "BlueDodgerMedium", "GreenForestDark", "GreenAutumDark", "BlueTurquoise", "BlueSkyDark", "BlueSkyMedium", "BlueDodger", "GreenForestMediumDark", "GreenJade", "CyanDark", "BlueSeaGreen", "BlueBrilliantMedium", "BlueBrilliant", "GreenForestMedium", "GreenForestLight", "GreenForstBlue", "GreenForestCyan", "CyanTurqouise", "BlueLight", "GreenForestBright", "GreenSpringBright", "GreenSpringMatte", "GreenSpringMedium", "BlueCyanMedium", "BlueCyanLight", "BrownChocolate", "MagentaDark", "MagentaPurple", "MagentaPurpleDark", "MagentaPurpleMedium", "MagentaPurpleLight", "OrangeBrown", "GreyDeep", "GreyPurpleDeep", "BlueSlateDeep", "BlueSlateDark", "BlueRoyal", "GreenOlive", "GreenSeaDeep", "GreenTurquoisePale", "BlueSteelDeep", "BlueSteelDark", "BlueCornflower", "GreenChartreuseDeep", "GreenSeaDeepDark", "BlueCadet", "BlueCadetLight", "BlueSky", "BlueSteel", "GreenChartreuseDark", "GreenPale", "GreenSeaDark", "BlueAquamarine", "BlueTurquoiseMedium", "BlueSteelLight", "GreenChartreuseMedim", "GreenSea", "GreenSeaMedium", "GreenSeaLight", "BlueAquamarineLight", "GreySlateDark", "RedDark", "MagentaPinkDeep", "MagentaDarkPink", "MagentaDarkPurple", "MagentaDarkViolet", "MagentaPurpleSlate", "Brown", "BrownPink", "MagentaPurplePlum", "MagentaPurplePlumMedium", "MagentaPurpleLavendar", "BlueSlate", "YellowBrown", "YellowWheatDark", "GreyWheat", "GreyLightSlate", "MagentaPurpleBlue", "MagentaPurpleSlateLight", "YellowWheatMedium", "GreenOliveMatte", "BrownSeaGreen", "BlueSkyLightSilver", "BlueSkyLightSilverBright", "BlueSkyPurple", "GreenChartreuse", "GreenOliveLight", "GreenPaleMedium", "BlueSeaGreenMedium", "GreySlateMedium", "BlueSkyPale", "GreenChartreuseBright", "GreenLight", "GreenLightMedium", "GreenPaleLight", "GreenAquamarine", "BlueSlateGrey", "RedSector", "RedPinkDeep", "MagentaVioletMedium", "MagentaVioletLight", "MagentaVioletDark", "MagentaPurplePosh", "OrangeBlood", "RedIndianMagenta", "MagentaHotPink", "MagentaOrchidDark", "MagentaOrchidMedium", "MagentaMediumAlt", "YellowGoldenRodDark", "BrownSalmon", "BrownRosy", "BrownGrey", "MagentaPurpleMediumMatte", "MagentaPurpleBright", "YellowGoldenDark", "YellowKhakiDark", "YellowNavajoWhite", "YellowNavajoWhiteLight", "BrownSteelBlue", "MagentaSteelBlue", "YellowGreenLight", "GreenOliveMedium", "YellowGreenSea", "GreyGreenSea", "BrownCyan", "BluePeriwinkle", "GreenYellow", "GreenYellowLight", "GreenNeonMatte", "GreenSlate", "BlueSlateLight", "BluePaleTurqouise", "RedBlood", "RedCherry", "RedRuby", "MagentaRuby", "MagentaRubyBright", "MagentaRubyLight", "OrangeBloodLight", "RedIndianMedium", "RedPinkHotDark", "RedPinkHot", "MagentaOrchidDeep", "MagentaOrchidBright", "OrangeMedium", "RedSalmon", "RedPinkMatte", "RedPinkDark", "MagentaPlum", "MagentaViolet", "YellowGolden", "BrownBeige", "BrownTan", "RedMistyRose", "MagentaThistle", "MagentaPlumMedium", "YellowLight", "YellowKhaki", "YellowGoldenLight", "YellowGoldenVeryLight", "GreyPink", "GreySlateBlue", "YellowGoldenBright", "YellowGoldenMedium", "GreenOliveDark", "GreenLightSea", "GreenHoneyDew", "CyanLightGrey", "RedBloodBright", "RedBloodMatte", "RedDeepPink", "MagentaDeepPink", "MagentaBrightLight", "MagentaBrightMedium", "RedOrange", "RedIndian", "RedIndianPink", "RedHotPink", "RedHotPinkBright", "MagentaOrchid", "OrangeDark", "RedSalmonMatte", "RedCoralLight", "RedVioletPale", "MagentaPurpleOrchidLight", "MagentaPurpleOrchidDark", "OrangeBright", "OrangeTangerine", "OrangeLightSalmon", "RedPinkLight", "RedPinkMedium", "MagentaPlumBright", "YellowGold", "YellowGoldBright", "YellowGoldMatte", "RedPinkWhite", "RedMistyRoseLight", "MagentaThistleBright", "YellowCanary", "YellowCanaryMedium", "YellowKhakiLight", "YellowWheat", "YellowWheatLight", "GreyWhite", "GreyAlmostBlack", "BlackMidnight", "BlackEbony", "BlackMatte", "BlackRaven", "BlackLicorice", "BlackJet", "BlackOnyx", "GreySilver", "GreySilverAlt", "GreySilverLight", "GreySilverLighter", "GreyHeather", "GreySilverMatte", "BlackFlat", "GreyDarkSlate", "GreySlightlyDarkSlate", "GreySlateAlt", "GreySlate", "GreyCharcoal", "GreyLightAlt", "GreyLight", "GreyVeryLight", "WhiteSilver"];

var subs = [
  // ansi color substitutions
  { 'type' : 'ansi', 'pattern' : /\r\n/g,     'replacement' : "\n" },
  { 'type' : 'ansi', 'pattern' : /\</g,       'replacement' : '&lt;' },
  { 'type' : 'ansi', 'pattern' : /\>/g,       'replacement' : '&gt;' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[1\;30m/g, 'replacement' : '<span class="ansi-brblack">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[0\;30m/g, 'replacement' : '<span class="ansi-black">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[1\;31m/g, 'replacement' : '<span class="ansi-brred">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[0\;31m/g, 'replacement' : '<span class="ansi-red">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[1\;32m/g, 'replacement' : '<span class="ansi-brgreen">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[0\;32m/g, 'replacement' : '<span class="ansi-green">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[1\;33m/g, 'replacement' : '<span class="ansi-bryellow">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[0\;33m/g, 'replacement' : '<span class="ansi-yellow">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[1\;34m/g, 'replacement' : '<span class="ansi-brblue">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[0\;34m/g, 'replacement' : '<span class="ansi-blue">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[1\;35m/g, 'replacement' : '<span class="ansi-brmagenta">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[0\;35m/g, 'replacement' : '<span class="ansi-magenta">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[1\;36m/g, 'replacement' : '<span class="ansi-brcyan">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[0\;36m/g, 'replacement' : '<span class="ansi-cyan">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[1\;37m/g, 'replacement' : '<span class="ansi-bright">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[0\;37m/g, 'replacement' : '<span class="ansi-bright">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[4m/g,     'replacement' : '<span class="ansi-underline">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[5m/g,  'replacement' : '<span class="ansi-slow-blink">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[1m/g,  'replacement' : '<span class="ansi-bold">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[2m/g,  'replacement' : '<span class="ansi-faint">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[0m/g,  'replacement' : '</span>' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[40m/g, 'replacement' : '</span>' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[41m/g, 'replacement' : '<span class="ansi-bgred">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[42m/g, 'replacement' : '<span class="ansi-bggreen">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[43m/g, 'replacement' : '<span class="ansi-bgyellow">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[44m/g, 'replacement' : '<span class="ansi-bgblue">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[45m/g, 'replacement' : '<span class="ansi-bgmagenta">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[46m/g, 'replacement' : '<span class="ansi-bgcyan">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[47m/g, 'replacement' : '<span class="ansi-bgwhite">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[49m/g, 'replacement' : '</span>' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[00m/g, 'replacement' : '</span></span></span></span>' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[01m/g, 'replacement' : '<span class="ansi-underline">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[31m/g, 'replacement' : '<span class="ansi-red">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[32m/g, 'replacement' : '<span class="ansi-green">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[33m/g, 'replacement' : '<span class="ansi-yellow">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[34m/g, 'replacement' : '<span class="ansi-blue">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[35m/g, 'replacement' : '<span class="ansi-magenta">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[36m/g, 'replacement' : '<span class="ansi-cyan">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[37m/g, 'replacement' : '<span class="ansi-bright">' },
  { 'type' : 'ansi', 'pattern' : /\u001b\[38;5;(\d+)m/g, 'replacement' : function( m, p1 ) {
    return '<span class="xterm256-' + xterm256_colors[ p1 ] + '">';
  }},
  { 'type' : 'ansi', 'pattern' : /\u001b\[48;5;(\d+)m/g, 'replacement' : function( m, p1 ) {
    return '<span class="xterm256-bg-' + xterm256_colors[ p1 ] + '">';
  }}
];
