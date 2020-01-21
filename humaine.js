let arr = [];
let lab = [];
let arr1 = [];
let lab1 = [];
let titre1;
let arr2 = [];
let lab2 = [];
let titre2;
let arr3 = [];
let lab3 = [];
let titre3;
let intitule = "";
let i = 0;
let j = 0;


fetch('http://localhost:1337/techniques').then(data => {
    data.json()
        .then(data => {
            data.forEach(element => {

                if (intitule != element.intitule) {
                    lab2.push(element.intitule);
                    lab.push(element.intitule);
                    titre2 = element.categorie;
                    intitule = element.intitule;
                }
                if (j == 5) {
                    arr2.push(i / 6);
                    arr.push(i / 6);
                    i = 0;
                    j = 0;
                }
                j++
                i += element.mention;
            });
        })  
})




fetch('http://localhost:1337/metiers').then(data => {
    data.json()
        .then(data => {
            data.forEach(element => {
                i += element.mention;
                if (intitule != element.intitule) {
                    lab1.push(element.intitule.split('_').join(' '));
                    lab.push(element.intitule.split('_').join(' '));
                    titre1 = element.categorie;
                    intitule = element.intitule; 
                }
                if (j == 5) {
                    arr1.push(i / 6);
                    arr.push(i / 6);
                    i = 0;
                    j = 0;
                }
                j++
            });
        })
})


fetch('http://localhost:1337/humains').then(data => {
    data.json()
        .then(data => {
            data.forEach(element => {
                    lab3.push(element.acquisition);
                    lab.push(element.acquisition);
                    titre3 = element.categorie;
                    arr3.push(element.mention);
                    arr.push(element.mention);
            });
        })
})


function newChart(type,canvas, data, label, titre) {
    let ctx = document.getElementById(canvas).getContext('2d');
    new Chart(ctx, {
        type: type,
        data: {
            labels: label,
            datasets: [
                {
                    label: titre,
                    data: data,
                    backgroundColor: ['#FFC0CB', '#B0C4DE', '#FFC0CB','#FFDAB9', '#ADD8E6','#F5DEB3', '#EEE8AA','#8FBC8F',
                    '#F0F8FF','#ADD8E6','#B0C4DE', '#F4A460','#BC8F8F','#FFC0CB', 
                    '#F08080', '#FFDAB9', '#F5DEB3', '#EEE8AA','#8FBC8F','#F0F8FF',
                    '#ADD8E6','#B0C4DE', '#F4A460','#BC8F8F','#B0C4DE', '#F4A460','#BC8F8F','#FFC0CB']
                }
            ]
        },
    });
}

$("#btn-chart1").click(() => {
    newChart('horizontalBar','myChart1', arr1, lab1, titre1);
});

$("#btn-chart2").click(() => {
    newChart('pie','myChart2', arr2, lab2, titre2);
});

$("#btn-chart3").click(() => {
    newChart('bar','myChart3', arr3, lab3, titre3);
});

$("#btn-chart").click(() => {
    newChart('polarArea','myChart', arr, lab, 'Toutes les compétences');
});













