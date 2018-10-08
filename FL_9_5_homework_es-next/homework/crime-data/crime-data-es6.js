const victimDataSource = name => {
    let victimsByName = {
        'John': {
            name: 'John',
            surname: 'Doe',
            age: '99',
            jobTitle: 'Victim'
        },
        'Jennifer': {
            name: 'Jennifer',
            surname: 'Nicker',
            age: '21',
            jobTitle: 'Artist'
        }
    };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (victimsByName.hasOwnProperty(name)) {
                resolve(victimsByName[name]);
            } else {
                reject('unknown victim');
            }
        }, 1000);
    });
}

const crimeDataSource = surname => {
    return new Promise((resolve, reject) => {
        let crimeBySurname = {
            'Doe': {
                title: 'dank memes',
                place: '9gag'
            },
            'Nicker': {
                title: 'robbery',
                place: 'NYC'
            }
        };
    
        setTimeout(() => {
            if (crimeBySurname.hasOwnProperty(surname)) {
                resolve(crimeBySurname[surname]);
            } else {
                reject('unknown surname');
            }
        }, 500);
    });
}

const loadVictimData = name => {
    return new Promise((resolve, reject) => {
        victimDataSource(name)
            .then(victimsByName => {
                crimeDataSource(victimsByName.surname)
                    .then(crimeBySurname => {
                        resolve(`${victimsByName.name} ${victimsByName.surname} (${victimsByName.jobTitle},\
${victimsByName.age}) suffered from ${crimeBySurname.title} in ${crimeBySurname.place}`)
                    });
            })
            .catch(err => reject(console.log(`Unhandled Promise rejection: ${err}`)));
    });
}