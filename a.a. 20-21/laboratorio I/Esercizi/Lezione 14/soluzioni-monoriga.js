//SOLUZIONE del Compito 02 (parte pratica), per programmatori di poche parole:

convertiBinCompl = a=>(a+512).toString(2).substr(-9)
contaFoglie = t=>t?(t.sx||t.dx?contaFoglie(t.sx)+contaFoglie(t.dx):1):0
isPrimo = (a,l=2,q=Math.sqrt(a))=>!(a%l)?a==2:(l<=q?isPrimo(a,l+1,q):true)
eliminaPrimi = a=>a.filter(e=>!isPrimo(e))
isPal = s=>s==s.split("").reverse().join("")
indexEq = a=>a.find((e,i)=>e==i)!=undefined
