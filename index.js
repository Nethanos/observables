//Aqui estou me preparando para utilizar a biblioteca
const Rx = require('rxjs');
/**
 * Aqui estou criando um observable na mão. É importante
 * salientar que o método create está depreciado.
 */
const myObservable = Rx.Observable.create(observer => {
    observer.next('testando');
    observer.next('observable');
    observer.next('caseiro');
})

myObservable.subscribe(response => {
    console.log(response);
})


// -------------- COM FUNÇÃO NO NEXT()

console.log(" -----------------  COM FUNCTION EM RETORNO --------------- ")

/**
 * Aqui estou criando um observable na mão. É importante
 * salientar que o método create está depreciado.
 */
const myObservableWithFunction = Rx.Observable.create(observer => {
    observer.next('meu observable');
    observer.next(() => {
        console.log("testando minha função")
    })

})

/**
 * Jogando no console o resultado deste observable.
 */
myObservableWithFunction.subscribe(response => {
    if (typeof response === "function") {
        response();
    }
    console.log(response);

});

// ------------------- SUBSCRIPTION ------------------------
console.log("-------------- SUBSCRIPTION ----------------------")
/**
 * Criando um observable a partir do operador interval, 
 * que o faz ser chamado a cada x milissegundos que são passados
 * como parâmetro, neste caso, de um em um segundo.
 */
const observableForSubscription = Rx.interval(1000);
/**
 * "Ativando" o observable e guardando a referencia do subscription
 * na variável mySubscription; lembrando que, como criei o observable
 * a partir do operador interval, o console.log dentro do subscribe será chamado
 * a cada 1 segundo ad eternum.
 */
const mySubscription = observableForSubscription.subscribe(_ => {
    console.log("Hello there");
})
/**
 * Pra conseguir parar ou "descartar" a subscrição deste observable,
 * após cinco segundos(lembrando que são cinco segundos independente da instrução acima),
 * chamo o método .unsubscribe() e o observable para de emitir o valor no console.
 */
setTimeout(() => {
    mySubscription.unsubscribe()
    console.log("dei unsubscribe")
}, 5000);
