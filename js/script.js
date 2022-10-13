


// all Phone
const allPhone = async (value) => {
    const PhoneApi = `https://openapi.programming-hero.com/api/phones?search=${value}`;
    const res = await fetch(PhoneApi);
    const data = await res.json();
    phones(data.data);
}

const phones = phones => {
    // const phhne = phones.slice(0, 15);
    const PhonesShowId = document.getElementById('all-phone');
    PhonesShowId.innerText = ''
    phones.forEach(phone => {
        const newEle = document.createElement('div');
        newEle.classList.add('phones');
        // console.log(phone);
        newEle.innerHTML = `<h3>${phone.phone_name}</h3>
        <img class="phoneimg" src='${phone.image}'/>
        <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-primary" onclick="DetailsFun('${phone.slug}')"> Details</button>
        `
        PhonesShowId.appendChild(newEle);

    })

}
// show Details 
const DetailsFun = async code => {
    // console.log(code);
    const detailsAPi = `https://openapi.programming-hero.com/api/phone/${code}`;
    const res = await fetch(detailsAPi)
    const data = await res.json()
    LoadDetailsPhone(data.data);

}

// show Details All toggle
const LoadDetailsPhone = phonesCode => {
    console.log(phonesCode);
    const phoneTitle = document.getElementById('staticBackdropLabel');
    const togglebody = document.getElementById('toggle-body');
    phoneTitle.innerText = phonesCode.name;
    togglebody.innerHTML = `
   <div class="imgDiv"> <img class ="detailsimg" src="${phonesCode.image}"/></div>
    <h3><small>${phonesCode.brand}<small/></h3>
    <div class ="mainFeatures">
                <li>${phonesCode.mainFeatures.chipSet}</li>
                <li>Display:${phonesCode.mainFeatures.displaySize}</li>
                <li>Memory: ${phonesCode.mainFeatures.memory}</li>
                <li>Sensors:
                <ul>
                <li>${phonesCode.mainFeatures.sensors ? phonesCode.mainFeatures.sensors[0] : "No Features"}</li>
                <li>${phonesCode.mainFeatures.sensors ? phonesCode.mainFeatures.sensors[1] : "No Features"}</li>
                <li>${phonesCode.mainFeatures.sensors ? phonesCode.mainFeatures.sensors[2] : "No Features"}</li>
                <li>${phonesCode.mainFeatures.sensors ? phonesCode.mainFeatures.sensors[3] : "No Features"}</li>
                <li>${phonesCode.mainFeatures.sensors ? phonesCode.mainFeatures.sensors[4] : "No Features"}</li>
                <li>${phonesCode.mainFeatures.sensors ? phonesCode.mainFeatures.sensors[5] : "No Features"}</li>
                </ul>
                </li>
                <li>Storage:${phonesCode.mainFeatures.storage}</li>
                <li>ReleaseDate:${phonesCode.mainFeatures.releaseDate}</li>
    </div>
    `
    // const toggleId = document.getElementById('toggle');

}
// clicktosearch hendler
const clicktoSearch = () => {
    const inputnBtn = document.getElementById('input-text');
    const showMsgId = document.getElementById('show-msg');
    const spinerId = document.getElementById('spiner');
    // console.log(showMsgId)
    const value = inputnBtn.value;

    // show msg
    if (value === '') {
        // console.log('click')
        showMsgId.classList.add('d-block');
        spinerId.classList.add('d-block');
    }
    else {
        showMsgId.classList.add('d-none')
        spinerId.classList.add('d-none')
    }
    // show msg

    console.log(value)
    allPhone(value);

    inputnBtn.value = ''


}
allPhone();