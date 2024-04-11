$.getJSON('../data2.json',dataTransfer=>{
    $.each(dataTransfer,(i,data)=>{
        $('table').append(`<tr><td>${i+1}</td><td>${data.judul}</td><td>${data.kategori}</td><td>${data.waktu_publish}</td><td>${data.waktu_scraping}</td></tr>`);
    });
});