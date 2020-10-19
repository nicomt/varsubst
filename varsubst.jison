/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex

symbol [A-Za-z]{1}[A-Za-z0-9_]*
string [^$}]+
%%

"$$"                   return 'ESCAPE'
"${"                   return '${'
"$"                    return '$'
"}"                    return '}'
":-"                   return ':-'
{symbol}               return 'SYMBOL'
{string}               return 'STRING'
<<EOF>>                return 'EOF'

/lex

/* operator associations and precedence */
%left ':-'
%right '$'


%start output

%% /* language grammar */


output
    : EOF
        {return '';}
    | output EOF
        { return $1; }
    | output text
        {$$ = $1.concat($2);}
    | output special_token
        {$$ = $1.concat($2);}
    | special_token
        {$$ = $1;}
    | text
        {$$ = $1;}
    ;

text
    : string
        {$$ = $1;}
    | variable
        {$$ = $1;}
    | SYMBOL
        {$$ = $1;}
    ;

special_token
    : '}'
        {$$ = $1;}
    | ':-'
        {$$ = $1;}
    ;

combined
    : combined text
        {$$ = $1.concat($2);}
    | text
        {$$ = $1;}
    ;


variable
    : '${' SYMBOL ':-' combined '}'
        {$$ = yy.context[$2] || $4;}
    | '${' SYMBOL '}'
        {$$ = yy.context[$2] || '';}
    | '$' SYMBOL
        {$$ = yy.context[$2] || '';}
    ;

string
    : ESCAPE
        {$$ = '$';}
    | STRING
        {$$ = $1;}
    ;
