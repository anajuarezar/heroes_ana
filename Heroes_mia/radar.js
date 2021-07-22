function radarPlot() {
    
    // // Creates the Dropdown Menu
    d3.json("data/heroes.json").then((data) => {
        var heroeID = [];
        console.log(data);

        for (var i = 0; i < data.length; i++) {
            var IDarray = data[i].id
            heroeID.push(IDarray)
        }
        // console.log(heroeID);
        var options = heroeID;
        var dropMenuHero1 = d3.select("#selDataset");
        options.map(option => {
        dropMenuHero1.append("option").text(option);
        });

        var dropMenuHero2 = d3.select("#selDataset2");
        options.map(option => {
        dropMenuHero2.append("option").text(option);
        });

        d3.selectAll("#selDataset").on("change", radarPlot);
        d3.selectAll("#selDataset2").on("change2", radarPlot);

        var hero1 =(dropMenuHero1.property("value"))-1;
        var hero2 =(dropMenuHero2.property("value"))-1;

        var ID1 = dropMenuHero1.property("value");
        var ID2 = dropMenuHero2.property("value");

        var dataHero1 = data[hero1];
        var dataHero2 = data[hero2];

        console.log(dataHero1);
        console.log(dataHero2);

        var graph = document.getElementById("radar");
        var stats1 = Object.values(data[hero1].powerstats)
        var stats2 = Object.values(data[hero2].powerstats)

        console.log(data[hero1].name);
        
        var myChart = new Chart(graph, {
        type: 'radar',
        data: {
            labels: ['Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'],
            datasets: [{
                label: `ID: ${ID1}: Superheroe: ${data[hero1].name}`,
                data: stats1,
                backgroundColor: '#e6f7ff',
                borderColor: '#009999',
                borderWidth: 3
            },
            {
                label: `ID: ${ID2}: Superheroe: ${data[hero2].name}`,
                data: stats2,
                backgroundColor: '#e6e6ff',
                borderColor: '#9999ff',
                borderWidth: 3
            }
        ]
        },
    });
})

}

radarPlot();