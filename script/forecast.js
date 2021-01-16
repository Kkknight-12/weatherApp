let s = '';
let key = [];
db.collection('secretKey').get()
    .then( (data) => 
    {
        s = data.docs[0].data().k
        }
        // data.docs.forEach( doc => {
        //     key.push(doc.data())
        //     s = key[0].k
        //     // console.log(s)
        // })
)


const getWeather = async (locationId) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${locationId}?apikey=${s}`;

    const response = await fetch( base + query );
    const data = await response.json();

    return data[0];
}

const getCity = async (city) =>{
    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${s}&q=${city}`;

    const reponse = await fetch( base + query );
    const data = await reponse.json();

    return data[0]
}

// getCity('bhopal')
//     .then( (data) => { console.log(data) } )
//     .catch( (err) => { console.log(err) } );

// getWeather('204408')
//     .then( (data) => console.log(data))