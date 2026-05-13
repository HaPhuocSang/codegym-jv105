const NAMES_OF_STARS = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"];
const NAMES_OF_CONSTELLATIONS = ["Ursa Minor", "Taurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"];

function checkStars(nameStar) {
    let lastNameStar = nameStar;
    nameStar = nameStar.toLowerCase();
    nameStar = nameStar[0].toUpperCase() + nameStar.slice(1);
    let location = NAMES_OF_STARS.indexOf(nameStar);
    let result;
    if (location !== -1) {
        result = `${lastNameStar} thuộc chòm sao ${NAMES_OF_CONSTELLATIONS[location]}`;
    } else {
        result = "Không tìm thấy tên ngôi sao này!";
    }
    return result;
}

let nameStar;
do {
    nameStar = prompt("Nhập tên ngôi sao: ");
    nameStar = nameStar.trim();
    if (!nameStar) {
        alert("Bạn chưa nhập tên ngôi sao!");
    }
} while (!nameStar);
alert(checkStars(nameStar));