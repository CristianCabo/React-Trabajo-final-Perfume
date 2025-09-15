const misProductos = [
    {id: 1, nombre: "212 Sexy", precio: 2000, img: "../public/FotosPerfumesMujer/212Sexy.png", idCat:"perfumeshombre", stock: 10 },
    {id: 2, nombre: "212 VIP", precio: 1500, img:"../public/FotosPerfumesMujer/212Vip.png" ,idCat:"perfumeshombre"},
    {id: 3, nombre: "Alien", precio: 32000, img:"../public/FotosPerfumesMujer/alien.png", idCat:"perfumeshombre" },
    {id: 4, nombre: "Alien Goddess", precio: 8300, img:"../public/FotosPerfumesMujer/alienGoddess.png", idCat:"perfumeshombre" },
    {id: 5, nombre: "Amor Amor", precio: 12330, img:"../public/FotosPerfumesMujer/amorAmor.png", idCat:"perfumeshombre" },
    {id: 6, nombre: "Angel Fruity Fair", precio: 12330, img:"../public/FotosPerfumesMujer/angelFruityFair.png", idCat:"Perfumes Mujer" },
    {id: 7, nombre: "Aqua Di Allegoria Forte Mandarine Basilic", precio: 12330, img:"../public/FotosPerfumesMujer/aquaDiAllegoriaForteMandarineBasilic.png", idCat:"Perfumes Mujer" },
    {id: 8, nombre: "Bella Vita Guess", precio: 12330, img:"../public/FotosPerfumesMujer/bellaVitaGuess.png", idCat:"Perfumes Mujer" },
    {id: 9, nombre: "Black Opium", precio: 12330, img:"../public/FotosPerfumesMujer/blackOpium.png", idCat:"Perfumes Mujer" },
    {id: 10, nombre: "Black XS", precio: 12330, img:"../public/FotosPerfumesMujer/blackXs.png", idCat:"Perfumes Mujer" },
    {id: 11, nombre: "Bright Crystal Absol", precio: 12330, img:"../public/FotosPerfumesMujer/brightCrystalAbsolu.png", idCat:"Perfumes Mujer" },
    {id: 12, nombre: "Crystal Noir", precio: 12330, img:"../public/FotosPerfumesMujer/crystalNoir.png", idCat:"Perfumes Mujer" },
    {id: 13, nombre: "Fame", precio: 12330, img:"../public/FotosPerfumesMujer/fame.png", idCat:"Perfumes Mujer" },
    {id: 14, nombre: "Fan Di Fendi", precio: 12330, img:"../public/FotosPerfumesMujer/fanDiFendi.png", idCat:"Perfumes Mujer" },
    {id: 15, nombre: "Flowers Lelixir", precio: 12330, img:"../public/FotosPerfumesMujer/flowersLelixir.png", idCat:"Perfumes Mujer" },
    {id: 16, nombre: "Flowers", precio: 12330, img:"../public/FotosPerfumesMujer/flowers.png", idCat:"Perfumes Mujer" },
    {id: 17, nombre: "Flowers Poppy Bouquet", precio: 12330, img:"../public/FotosPerfumesMujer/flowersPoppyBouquet.png", idCat:"Perfumes Mujer" },
    {id: 18, nombre: "Goddess Edp", precio: 12330, img:"../public/FotosPerfumesMujer/goddessEdp.png", idCat:"Perfumes Mujer" },
    {id: 19, nombre: "Good Girl", precio: 12330, img:"../public/FotosPerfumesMujer/goodGirl.png", idCat:"Perfumes Mujer" },
    {id: 20, nombre: "Good Girl Supreme OK", precio: 12330, img:"../public/FotosPerfumesMujer/goodGirlSupremeOK.png", idCat:"Perfumes Mujer" },
    {id: 21, nombre: "Halloween", precio: 12330, img:"../public/FotosPerfumesMujer/halloween.png", idCat:"Perfumes Mujer" },
    {id: 22, nombre: "I am Fabulous", precio: 12330, img:"../public/FotosPerfumesMujer/iAmFabulous.png", idCat:"Perfumes Mujer" },
    {id: 23, nombre: "Idole", precio: 12330, img:"../public/FotosPerfumesMujer/idole.png", idCat:"Perfumes Mujer" },
    {id: 24, nombre: "Idole Aura", precio: 12330, img:"../public/FotosPerfumesMujer/idoleAura.png", idCat:"Perfumes Mujer" },
    {id: 25, nombre: "Idole Intense", precio: 12330, img:"../public/FotosPerfumesMujer/idoleIntense.png", idCat:"Perfumes Mujer" },
    {id: 26, nombre: "Jadore", precio: 12330, img:"../public/FotosPerfumesMujer/jadore.png", idCat:"Perfumes Mujer" },
    {id: 27, nombre: "La Belle", precio: 12330, img:"../public/FotosPerfumesMujer/laBelle.png", idCat:"Perfumes Mujer" },
    {id: 28, nombre: "La Nuit Tresor", precio: 12330, img:"../public/FotosPerfumesMujer/laNuitTresor.png", idCat:"Perfumes Mujer" },
    {id: 29, nombre: "La Vie Est Belle", precio: 12330, img:"../public/FotosPerfumesMujer/laVieEstBelle.png", idCat:"Perfumes Mujer" },
    {id: 30, nombre: "La Vie Est Belle Eclat", precio: 12330, img:"../public/FotosPerfumesMujer/laVieEstBelleEclat.png", idCat:"Perfumes Mujer" },
    {id: 31, nombre: "Leau Dissey", precio: 12330, img:"../public/FotosPerfumesMujer/leauDissey.png", idCat:"Perfumes Mujer" },
    {id: 32, nombre: "Libre Edp", precio: 12330, img:"../public/FotosPerfumesMujer/libreEdp.png", idCat:"Perfumes Mujer" },
    {id: 33, nombre: "Light Blue", precio: 12330, img:"../public/FotosPerfumesMujer/lightBlue.png", idCat:"Perfumes Mujer" },
    {id: 34, nombre: "Linterdit Absolu", precio: 12330, img:"../public/FotosPerfumesMujer/linterditAbsolu.png", idCat:"Perfumes Mujer" },
    {id: 35, nombre: "Linterdit Edp", precio: 12330, img:"../public/FotosPerfumesMujer/linterditEdp.png", idCat:"Perfumes Mujer" },
    {id: 36, nombre: "Miss Dior", precio: 12330, img:"../public/FotosPerfumesMujer/missDior.png", idCat:"Perfumes Mujer" },
    {id: 37, nombre: "Mon Paris", precio: 12330, img:"../public/FotosPerfumesMujer/monParis.png", idCat:"Perfumes Mujer" },
    {id: 38, nombre: "My Way", precio: 12330, img:"../public/FotosPerfumesMujer/myWay.png", idCat:"Perfumes Mujer" },
    {id: 39, nombre: "My Way Floral", precio: 12330, img:"../public/FotosPerfumesMujer/myWayFloral.png", idCat:"Perfumes Mujer" },
    {id: 40, nombre: "My Way Intense", precio: 12330, img:"../public/FotosPerfumesMujer/myWayIntense.png", idCat:"Perfumes Mujer" },
    {id: 41, nombre: "My Way Nectar", precio: 12330, img:"../public/FotosPerfumesMujer/myWayNectar.png", idCat:"Perfumes Mujer" },
    {id: 42, nombre: "Nina Nina Ricci", precio: 12330, img:"../public/FotosPerfumesMujer/ninaNinaRicci.png", idCat:"Perfumes Mujer" },
    {id: 43, nombre: "Olympea", precio: 12330, img:"../public/FotosPerfumesMujer/olimpea.png", idCat:"Perfumes Mujer" },
    {id: 44, nombre: "Paris", precio: 12330, img:"../public/FotosPerfumesMujer/paris.png", idCat:"Perfumes Mujer" },
    {id: 45, nombre: "Parisienne", precio: 12330, img:"../public/FotosPerfumesMujer/parisienne.png", idCat:"perfumesmujer" },
    {id: 46, nombre: "Poison Girl", precio: 12330, img:"../public/FotosPerfumesMujer/poisonGirl.png", idCat:"perfumesmujer" },
    {id: 47, nombre: "Pure Poison", precio: 12330, img:"../public/FotosPerfumesMujer/purePoison.png", idCat:"perfumesmujer" },
    {id: 48, nombre: "Pure XS", precio: 12330, img:"../public/FotosPerfumesMujer/pureXs.png", idCat:"perfumesmujer" },
    {id: 49, nombre: "Red Jeans", precio: 12330, img:"../public/FotosPerfumesMujer/redJeans.png", idCat:"Perfumes Mujer" },
    {id: 50, nombre: "Ricci Nina Ricci", precio: 12330, img:"../public/FotosPerfumesMujer/ricciRicciNinaRicci.png", idCat:"Perfumes Mujer" },
    {id: 51, nombre: "Rose Goldea", precio: 12330, img:"../public/FotosPerfumesMujer/roseGoldea.png", idCat:"Perfumes Mujer" },
    {id: 52, nombre: "Rose The One", precio: 12330, img:"../public/FotosPerfumesMujer/roseTheOne.png", idCat:"Perfumes Mujer" },
    {id: 53, nombre: "Scandal", precio: 12330, img:"../public/FotosPerfumesMujer/scandal.png", idCat:"Perfumes Mujer" },
    {id: 54, nombre: "Scandal Le Parfum", precio: 12330, img:"../public/FotosPerfumesMujer/scandalLeParfum.png", idCat:"Perfumes Mujer" },
    {id: 55, nombre: "SI Armani", precio: 12330, img:"../public/FotosPerfumesMujer/siArmani.png", idCat:"Perfumes Mujer" },
    {id: 56, nombre: "SI Edp Armani", precio: 12330, img:"../public/FotosPerfumesMujer/siEdpArmani.png", idCat:"Perfumes Mujer" },
    {id: 57, nombre: "SI Fiori", precio: 12330, img:"../public/FotosPerfumesMujer/siFiori.png", idCat:"Perfumes Mujer" },
    {id: 58, nombre: "Si Passione", precio: 12330, img:"../public/FotosPerfumesMujer/siPassione.png", idCat:"Perfumes Mujer" },
    {id: 59, nombre: "So Scandal", precio: 12330, img:"../public/FotosPerfumesMujer/soScandal.png", idCat:"Perfumes Mujer" },
    {id: 60, nombre: "The One", precio: 12330, img:"../public/FotosPerfumesMujer/theOne.png", idCat:"perfumesmujer" },
    {id: 61, nombre: "Toy 2", precio: 12330, img:"../public/FotosPerfumesMujer/toy2.png", idCat:"perfumesmujer" },
    {id: 62, nombre: "Tresor In Love", precio: 12330, img:"../public/FotosPerfumesMujer/tresorInLove.png", idCat:"perfumesmujer" },
    {id: 63, nombre: "Wanted Girl By Night", precio: 12330, img:"../public/FotosPerfumesMujer/wantedGirlByNight.png", idCat:"perfumesmujer" },
    {id: 64, nombre: "Wanted Girl Edp", precio: 12330, img:"../public/FotosPerfumesMujer/wantedGirlEdp.png", idCat:"perfumesmujer" },
    {id: 65, nombre: "Woman", precio: 12330, img:"../public/FotosPerfumesMujer/woman.png", idCat:"perfumesmujer" },
    {id: 66, nombre: "Yellow Diamond", precio: 12330, img:"../public/FotosPerfumesMujer/yellowDiamond.png", idCat:"perfumesmujer" }
]

export const getProductos = ()=> {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(misProductos)
        },100)
    })
}

export const getUnProducto = (id)=>{
    return new Promise(resolve=>{
        setTimeout(()=>{
            const producto = misProductos.find(item=>item.id == id)
            resolve(producto)
        }, 100)
    })
}

export const getProductoPorCategoria = (idCategoria) =>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria)
            resolve(productosCategoria)
        },100)
    })
}