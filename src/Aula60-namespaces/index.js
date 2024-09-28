var MeuNamespace;
(function (MeuNamespace) {
    MeuNamespace.nomeDoNamespace = 'Luiz';
    var PessoaDoNamespace = /** @class */ (function () {
        function PessoaDoNamespace(name) {
            this.name = name;
        }
        return PessoaDoNamespace;
    }());
    MeuNamespace.PessoaDoNamespace = PessoaDoNamespace;
    var pessoa = new PessoaDoNamespace('Luiz');
    console.log(pessoa);
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nomeDoNamespace = 'Luiz';
    })(OutroNamespace = MeuNamespace.OutroNamespace || (MeuNamespace.OutroNamespace = {}));
})(MeuNamespace || (MeuNamespace = {}));
var PessoaDoNamespace = new MeuNamespace.PessoaDoNamespace('Luiz');
console.log(PessoaDoNamespace);
console.log(MeuNamespace.nomeDoNamespace);
console.log(MeuNamespace.OutroNamespace.nomeDoNamespace);
var constDoNamespace = 'Valor da const do namespace';
/// <reference path="module.ts"/>
console.log(MeuNamespace.nomeDoNamespace);
var a = 1;
console.log(constDoNamespace);
