function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('resultado')
    if(fano.value == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
    }else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - fano.value
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'bb.jpg')
            }else if(idade < 18){
                //adolescente
                img.setAttribute('src', 'homadoles.jpg')
            } else if(idade < 27){
                //Joven
                img.setAttribute('src', 'homemjov.jpg')
            }else if(idade < 47){
                //Adulto
                img.setAttribute('src', 'homemadult.jpg')
            }else if(idade <= 110){
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }else{
                //falecido
                window.alert('FALECIDO')
                img.setAttribute('src','caixao.jpg')
            }
        }
            
            else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <13) {
                //Criança
                img.setAttribute('src', 'bbfem.jpg')
            }else if(idade < 18){
                //adolescente
                img.setAttribute('src','mulheradol.jpg')
            } else if(idade < 27){
                //Joven
                img.setAttribute('src', 'mulherjov.jpg')
            }else if(idade < 47){
                //Adulto
                img.setAttribute('src', 'mulheradult.jpg')
            }else if(idade <= 110){
                //Idoso
                img.setAttribute('src', 'idosa.jpg')
            }else{
                //falecido
                window.alert('FALECIDO')
                img.setAttribute('src','caixao.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
