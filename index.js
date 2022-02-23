(function(Prism){
   Prism.languages.umbra = {
       comment : {
           pattern: /(^|[^"{\\$])#.*/,
           lookbehind: true
       },
       string : [
           // Double-quoted string
           {
               pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
               lookbehind: true,
               greedy: true
           },
           // Single-quoted string
           {
               pattern: /(^|[^$\\])'[^']*'/,
               lookbehind: true,
               greedy: true
           },
       ],
       operator: {
           pattern: /\+=?|-|=[=~]?|!=?|<-/,
       },
       keyword: {
           pattern: /(^|[^\w-])(?:str|num|bool)(?![\w-])/,
           lookbehind: true
       }
   }

   Prism.languages.umb = Prism.languages.umbra
})(Prism)
