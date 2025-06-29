var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.osm.org/{z}/{x}/{y}.png'
            })
        });
var lyr_PETANDWIKABDEMAKTAHUN2014_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PETA NDWI KAB DEMAK TAHUN 2014<br />\
    <img src="styles/legend/PETANDWIKABDEMAKTAHUN2014_1_0.png" /> Badan Air<br />\
    <img src="styles/legend/PETANDWIKABDEMAKTAHUN2014_1_1.png" /> Kelembaban Tinggi<br />\
    <img src="styles/legend/PETANDWIKABDEMAKTAHUN2014_1_2.png" /> Kelembaban Sedang<br />\
    <img src="styles/legend/PETANDWIKABDEMAKTAHUN2014_1_3.png" /> Vegetasi Sedang<br />\
    <img src="styles/legend/PETANDWIKABDEMAKTAHUN2014_1_4.png" /> Vegetasi Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PETANDWIKABDEMAKTAHUN2014_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12296730.495827, -797791.787053, 12337919.933939, -748472.000061]
        })
    });
var lyr_PETANDWIKABDEMAKTAHUN2024_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'PETA NDWI KAB DEMAK TAHUN 2024<br />\
    <img src="styles/legend/PETANDWIKABDEMAKTAHUN2024_2_0.png" /> Badan Air<br />\
    <img src="styles/legend/PETANDWIKABDEMAKTAHUN2024_2_1.png" /> Kelembaban Tinggi<br />\
    <img src="styles/legend/PETANDWIKABDEMAKTAHUN2024_2_2.png" /> Kelembaban Sedang<br />\
    <img src="styles/legend/PETANDWIKABDEMAKTAHUN2024_2_3.png" /> Vegetasi Sedang<br />\
    <img src="styles/legend/PETANDWIKABDEMAKTAHUN2024_2_4.png" /> Vegetasi Tinggi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PETANDWIKABDEMAKTAHUN2024_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12296730.495827, -797791.787053, 12337919.933939, -748472.000061]
        })
    });
var format_DeliniasiKabDemak_3 = new ol.format.GeoJSON();
var features_DeliniasiKabDemak_3 = format_DeliniasiKabDemak_3.readFeatures(json_DeliniasiKabDemak_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeliniasiKabDemak_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeliniasiKabDemak_3.addFeatures(features_DeliniasiKabDemak_3);
var lyr_DeliniasiKabDemak_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeliniasiKabDemak_3, 
                style: style_DeliniasiKabDemak_3,
                popuplayertitle: 'Deliniasi Kab. Demak',
                interactive: false,
                title: '<img src="styles/legend/DeliniasiKabDemak_3.png" /> Deliniasi Kab. Demak'
            });
var format_4500_4 = new ol.format.GeoJSON();
var features_4500_4 = format_4500_4.readFeatures(json_4500_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4500_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4500_4.addFeatures(features_4500_4);
var lyr_4500_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4500_4, 
                style: style_4500_4,
                popuplayertitle: '4500',
                interactive: false,
                title: '<img src="styles/legend/4500_4.png" /> 4500'
            });
var format_3000_5 = new ol.format.GeoJSON();
var features_3000_5 = format_3000_5.readFeatures(json_3000_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3000_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3000_5.addFeatures(features_3000_5);
var lyr_3000_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3000_5, 
                style: style_3000_5,
                popuplayertitle: '3000',
                interactive: false,
                title: '<img src="styles/legend/3000_5.png" /> 3000'
            });
var format_1500_6 = new ol.format.GeoJSON();
var features_1500_6 = format_1500_6.readFeatures(json_1500_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1500_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1500_6.addFeatures(features_1500_6);
var lyr_1500_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1500_6, 
                style: style_1500_6,
                popuplayertitle: '1500',
                interactive: false,
                title: '<img src="styles/legend/1500_6.png" /> 1500'
            });
var format_JalanDemak_7 = new ol.format.GeoJSON();
var features_JalanDemak_7 = format_JalanDemak_7.readFeatures(json_JalanDemak_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDemak_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDemak_7.addFeatures(features_JalanDemak_7);
var lyr_JalanDemak_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDemak_7, 
                style: style_JalanDemak_7,
                popuplayertitle: 'Jalan Demak',
                interactive: false,
                title: '<img src="styles/legend/JalanDemak_7.png" /> Jalan Demak'
            });
var format_BadanAir_8 = new ol.format.GeoJSON();
var features_BadanAir_8 = format_BadanAir_8.readFeatures(json_BadanAir_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BadanAir_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BadanAir_8.addFeatures(features_BadanAir_8);
var lyr_BadanAir_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BadanAir_8, 
                style: style_BadanAir_8,
                popuplayertitle: 'Badan Air',
                interactive: false,
                title: '<img src="styles/legend/BadanAir_8.png" /> Badan Air'
            });
var format_wonowosoLapangansepakbola_9 = new ol.format.GeoJSON();
var features_wonowosoLapangansepakbola_9 = format_wonowosoLapangansepakbola_9.readFeatures(json_wonowosoLapangansepakbola_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wonowosoLapangansepakbola_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wonowosoLapangansepakbola_9.addFeatures(features_wonowosoLapangansepakbola_9);
var lyr_wonowosoLapangansepakbola_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wonowosoLapangansepakbola_9, 
                style: style_wonowosoLapangansepakbola_9,
                popuplayertitle: 'wonowoso - Lapangan sepakbola',
                interactive: true,
                title: '<img src="styles/legend/wonowosoLapangansepakbola_9.png" /> wonowoso - Lapangan sepakbola'
            });
var format_WonoAgungSMPNegeri3Bonang_10 = new ol.format.GeoJSON();
var features_WonoAgungSMPNegeri3Bonang_10 = format_WonoAgungSMPNegeri3Bonang_10.readFeatures(json_WonoAgungSMPNegeri3Bonang_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WonoAgungSMPNegeri3Bonang_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WonoAgungSMPNegeri3Bonang_10.addFeatures(features_WonoAgungSMPNegeri3Bonang_10);
var lyr_WonoAgungSMPNegeri3Bonang_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WonoAgungSMPNegeri3Bonang_10, 
                style: style_WonoAgungSMPNegeri3Bonang_10,
                popuplayertitle: 'WonoAgung - SMP Negeri 3 Bonang',
                interactive: true,
                title: '<img src="styles/legend/WonoAgungSMPNegeri3Bonang_10.png" /> WonoAgung - SMP Negeri 3 Bonang'
            });
var format_TuguMasjidKedunguter_11 = new ol.format.GeoJSON();
var features_TuguMasjidKedunguter_11 = format_TuguMasjidKedunguter_11.readFeatures(json_TuguMasjidKedunguter_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TuguMasjidKedunguter_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TuguMasjidKedunguter_11.addFeatures(features_TuguMasjidKedunguter_11);
var lyr_TuguMasjidKedunguter_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TuguMasjidKedunguter_11, 
                style: style_TuguMasjidKedunguter_11,
                popuplayertitle: 'Tugu - Masjid Kedunguter',
                interactive: true,
                title: '<img src="styles/legend/TuguMasjidKedunguter_11.png" /> Tugu - Masjid Kedunguter'
            });
var format_Tridonorejomushollaalfalah_12 = new ol.format.GeoJSON();
var features_Tridonorejomushollaalfalah_12 = format_Tridonorejomushollaalfalah_12.readFeatures(json_Tridonorejomushollaalfalah_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tridonorejomushollaalfalah_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tridonorejomushollaalfalah_12.addFeatures(features_Tridonorejomushollaalfalah_12);
var lyr_Tridonorejomushollaalfalah_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tridonorejomushollaalfalah_12, 
                style: style_Tridonorejomushollaalfalah_12,
                popuplayertitle: 'Tridonorejo - musholla al falah',
                interactive: true,
                title: '<img src="styles/legend/Tridonorejomushollaalfalah_12.png" /> Tridonorejo - musholla al falah'
            });
var format_timbulslokomasjidKedunguter_13 = new ol.format.GeoJSON();
var features_timbulslokomasjidKedunguter_13 = format_timbulslokomasjidKedunguter_13.readFeatures(json_timbulslokomasjidKedunguter_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_timbulslokomasjidKedunguter_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_timbulslokomasjidKedunguter_13.addFeatures(features_timbulslokomasjidKedunguter_13);
var lyr_timbulslokomasjidKedunguter_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_timbulslokomasjidKedunguter_13, 
                style: style_timbulslokomasjidKedunguter_13,
                popuplayertitle: 'timbulsloko - masjid Kedunguter',
                interactive: true,
                title: '<img src="styles/legend/timbulslokomasjidKedunguter_13.png" /> timbulsloko - masjid Kedunguter'
            });
var format_tambakbulusantkkartikaputra_14 = new ol.format.GeoJSON();
var features_tambakbulusantkkartikaputra_14 = format_tambakbulusantkkartikaputra_14.readFeatures(json_tambakbulusantkkartikaputra_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambakbulusantkkartikaputra_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambakbulusantkkartikaputra_14.addFeatures(features_tambakbulusantkkartikaputra_14);
var lyr_tambakbulusantkkartikaputra_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tambakbulusantkkartikaputra_14, 
                style: style_tambakbulusantkkartikaputra_14,
                popuplayertitle: 'tambakbulusan  - tk kartika putra',
                interactive: true,
                title: '<img src="styles/legend/tambakbulusantkkartikaputra_14.png" /> tambakbulusan  - tk kartika putra'
            });
var format_surodadiSMPNegeri3Bonang_15 = new ol.format.GeoJSON();
var features_surodadiSMPNegeri3Bonang_15 = format_surodadiSMPNegeri3Bonang_15.readFeatures(json_surodadiSMPNegeri3Bonang_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_surodadiSMPNegeri3Bonang_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_surodadiSMPNegeri3Bonang_15.addFeatures(features_surodadiSMPNegeri3Bonang_15);
var lyr_surodadiSMPNegeri3Bonang_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_surodadiSMPNegeri3Bonang_15, 
                style: style_surodadiSMPNegeri3Bonang_15,
                popuplayertitle: 'surodadi - SMP Negeri 3 Bonang',
                interactive: true,
                title: '<img src="styles/legend/surodadiSMPNegeri3Bonang_15.png" /> surodadi - SMP Negeri 3 Bonang'
            });
var format_SidorejoMasjidBaitulMutaqqin_16 = new ol.format.GeoJSON();
var features_SidorejoMasjidBaitulMutaqqin_16 = format_SidorejoMasjidBaitulMutaqqin_16.readFeatures(json_SidorejoMasjidBaitulMutaqqin_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SidorejoMasjidBaitulMutaqqin_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SidorejoMasjidBaitulMutaqqin_16.addFeatures(features_SidorejoMasjidBaitulMutaqqin_16);
var lyr_SidorejoMasjidBaitulMutaqqin_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SidorejoMasjidBaitulMutaqqin_16, 
                style: style_SidorejoMasjidBaitulMutaqqin_16,
                popuplayertitle: 'Sidorejo - Masjid Baitul Mutaqqin',
                interactive: true,
                title: '<img src="styles/legend/SidorejoMasjidBaitulMutaqqin_16.png" /> Sidorejo - Masjid Baitul Mutaqqin'
            });
var format_seklentingmasjidBesarAlfalah_17 = new ol.format.GeoJSON();
var features_seklentingmasjidBesarAlfalah_17 = format_seklentingmasjidBesarAlfalah_17.readFeatures(json_seklentingmasjidBesarAlfalah_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_seklentingmasjidBesarAlfalah_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_seklentingmasjidBesarAlfalah_17.addFeatures(features_seklentingmasjidBesarAlfalah_17);
var lyr_seklentingmasjidBesarAlfalah_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_seklentingmasjidBesarAlfalah_17, 
                style: style_seklentingmasjidBesarAlfalah_17,
                popuplayertitle: 'seklenting  - masjid Besar Al falah',
                interactive: true,
                title: '<img src="styles/legend/seklentingmasjidBesarAlfalah_17.png" /> seklenting  - masjid Besar Al falah'
            });
var format_PengkolMushollahalfalah_18 = new ol.format.GeoJSON();
var features_PengkolMushollahalfalah_18 = format_PengkolMushollahalfalah_18.readFeatures(json_PengkolMushollahalfalah_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PengkolMushollahalfalah_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PengkolMushollahalfalah_18.addFeatures(features_PengkolMushollahalfalah_18);
var lyr_PengkolMushollahalfalah_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PengkolMushollahalfalah_18, 
                style: style_PengkolMushollahalfalah_18,
                popuplayertitle: 'Pengkol - Mushollah al falah',
                interactive: true,
                title: '<img src="styles/legend/PengkolMushollahalfalah_18.png" /> Pengkol - Mushollah al falah'
            });
var format_MorodemakMushollaalfalah_19 = new ol.format.GeoJSON();
var features_MorodemakMushollaalfalah_19 = format_MorodemakMushollaalfalah_19.readFeatures(json_MorodemakMushollaalfalah_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MorodemakMushollaalfalah_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MorodemakMushollaalfalah_19.addFeatures(features_MorodemakMushollaalfalah_19);
var lyr_MorodemakMushollaalfalah_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MorodemakMushollaalfalah_19, 
                style: style_MorodemakMushollaalfalah_19,
                popuplayertitle: 'Morodemak - Musholla al falah',
                interactive: true,
                title: '<img src="styles/legend/MorodemakMushollaalfalah_19.png" /> Morodemak - Musholla al falah'
            });
var format_MargoLindukMushollaalfalah_20 = new ol.format.GeoJSON();
var features_MargoLindukMushollaalfalah_20 = format_MargoLindukMushollaalfalah_20.readFeatures(json_MargoLindukMushollaalfalah_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MargoLindukMushollaalfalah_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MargoLindukMushollaalfalah_20.addFeatures(features_MargoLindukMushollaalfalah_20);
var lyr_MargoLindukMushollaalfalah_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MargoLindukMushollaalfalah_20, 
                style: style_MargoLindukMushollaalfalah_20,
                popuplayertitle: 'MargoLinduk - Musholla al falah',
                interactive: true,
                title: '<img src="styles/legend/MargoLindukMushollaalfalah_20.png" /> MargoLinduk - Musholla al falah'
            });
var format_LoirengPuskesmasSayungII_21 = new ol.format.GeoJSON();
var features_LoirengPuskesmasSayungII_21 = format_LoirengPuskesmasSayungII_21.readFeatures(json_LoirengPuskesmasSayungII_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LoirengPuskesmasSayungII_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LoirengPuskesmasSayungII_21.addFeatures(features_LoirengPuskesmasSayungII_21);
var lyr_LoirengPuskesmasSayungII_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LoirengPuskesmasSayungII_21, 
                style: style_LoirengPuskesmasSayungII_21,
                popuplayertitle: 'Loireng - Puskesmas Sayung II',
                interactive: true,
                title: '<img src="styles/legend/LoirengPuskesmasSayungII_21.png" /> Loireng - Puskesmas Sayung II'
            });
var format_JogoMasjidkedunguter_22 = new ol.format.GeoJSON();
var features_JogoMasjidkedunguter_22 = format_JogoMasjidkedunguter_22.readFeatures(json_JogoMasjidkedunguter_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JogoMasjidkedunguter_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JogoMasjidkedunguter_22.addFeatures(features_JogoMasjidkedunguter_22);
var lyr_JogoMasjidkedunguter_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JogoMasjidkedunguter_22, 
                style: style_JogoMasjidkedunguter_22,
                popuplayertitle: 'Jogo - Masjid kedunguter',
                interactive: true,
                title: '<img src="styles/legend/JogoMasjidkedunguter_22.png" /> Jogo - Masjid kedunguter'
            });
var format_GojoyoMasjidbesarAlFalah_23 = new ol.format.GeoJSON();
var features_GojoyoMasjidbesarAlFalah_23 = format_GojoyoMasjidbesarAlFalah_23.readFeatures(json_GojoyoMasjidbesarAlFalah_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GojoyoMasjidbesarAlFalah_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GojoyoMasjidbesarAlFalah_23.addFeatures(features_GojoyoMasjidbesarAlFalah_23);
var lyr_GojoyoMasjidbesarAlFalah_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GojoyoMasjidbesarAlFalah_23, 
                style: style_GojoyoMasjidbesarAlFalah_23,
                popuplayertitle: 'Gojoyo - Masjid besar Al Falah',
                interactive: true,
                title: '<img src="styles/legend/GojoyoMasjidbesarAlFalah_23.png" /> Gojoyo - Masjid besar Al Falah'
            });
var format_GebangArumTKKartikaPutra_24 = new ol.format.GeoJSON();
var features_GebangArumTKKartikaPutra_24 = format_GebangArumTKKartikaPutra_24.readFeatures(json_GebangArumTKKartikaPutra_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GebangArumTKKartikaPutra_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GebangArumTKKartikaPutra_24.addFeatures(features_GebangArumTKKartikaPutra_24);
var lyr_GebangArumTKKartikaPutra_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GebangArumTKKartikaPutra_24, 
                style: style_GebangArumTKKartikaPutra_24,
                popuplayertitle: 'GebangArum - TK Kartika Putra',
                interactive: true,
                title: '<img src="styles/legend/GebangArumTKKartikaPutra_24.png" /> GebangArum - TK Kartika Putra'
            });
var format_GebangMushollaalfalah_25 = new ol.format.GeoJSON();
var features_GebangMushollaalfalah_25 = format_GebangMushollaalfalah_25.readFeatures(json_GebangMushollaalfalah_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GebangMushollaalfalah_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GebangMushollaalfalah_25.addFeatures(features_GebangMushollaalfalah_25);
var lyr_GebangMushollaalfalah_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GebangMushollaalfalah_25, 
                style: style_GebangMushollaalfalah_25,
                popuplayertitle: 'Gebang - Musholla al falah',
                interactive: true,
                title: '<img src="styles/legend/GebangMushollaalfalah_25.png" /> Gebang - Musholla al falah'
            });
var format_BetahwalangPuskesmasBonangII_26 = new ol.format.GeoJSON();
var features_BetahwalangPuskesmasBonangII_26 = format_BetahwalangPuskesmasBonangII_26.readFeatures(json_BetahwalangPuskesmasBonangII_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BetahwalangPuskesmasBonangII_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BetahwalangPuskesmasBonangII_26.addFeatures(features_BetahwalangPuskesmasBonangII_26);
var lyr_BetahwalangPuskesmasBonangII_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BetahwalangPuskesmasBonangII_26, 
                style: style_BetahwalangPuskesmasBonangII_26,
                popuplayertitle: 'Betah walang - Puskesmas Bonang II',
                interactive: true,
                title: '<img src="styles/legend/BetahwalangPuskesmasBonangII_26.png" /> Betah walang - Puskesmas Bonang II'
            });
var format_BedongMasjidBLengkong_27 = new ol.format.GeoJSON();
var features_BedongMasjidBLengkong_27 = format_BedongMasjidBLengkong_27.readFeatures(json_BedongMasjidBLengkong_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BedongMasjidBLengkong_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BedongMasjidBLengkong_27.addFeatures(features_BedongMasjidBLengkong_27);
var lyr_BedongMasjidBLengkong_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BedongMasjidBLengkong_27, 
                style: style_BedongMasjidBLengkong_27,
                popuplayertitle: 'Bedong - Masjid B. Lengkong',
                interactive: true,
                title: '<img src="styles/legend/BedongMasjidBLengkong_27.png" /> Bedong - Masjid B. Lengkong'
            });
var format_BanjarSariTKKartikaPutra_28 = new ol.format.GeoJSON();
var features_BanjarSariTKKartikaPutra_28 = format_BanjarSariTKKartikaPutra_28.readFeatures(json_BanjarSariTKKartikaPutra_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BanjarSariTKKartikaPutra_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BanjarSariTKKartikaPutra_28.addFeatures(features_BanjarSariTKKartikaPutra_28);
var lyr_BanjarSariTKKartikaPutra_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BanjarSariTKKartikaPutra_28, 
                style: style_BanjarSariTKKartikaPutra_28,
                popuplayertitle: 'BanjarSari - TK Kartika Putra',
                interactive: true,
                title: '<img src="styles/legend/BanjarSariTKKartikaPutra_28.png" /> BanjarSari - TK Kartika Putra'
            });
var format_BadongMasjidKedunguter_29 = new ol.format.GeoJSON();
var features_BadongMasjidKedunguter_29 = format_BadongMasjidKedunguter_29.readFeatures(json_BadongMasjidKedunguter_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BadongMasjidKedunguter_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BadongMasjidKedunguter_29.addFeatures(features_BadongMasjidKedunguter_29);
var lyr_BadongMasjidKedunguter_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BadongMasjidKedunguter_29, 
                style: style_BadongMasjidKedunguter_29,
                popuplayertitle: 'Badong - Masjid Kedunguter',
                interactive: true,
                title: '<img src="styles/legend/BadongMasjidKedunguter_29.png" /> Badong - Masjid Kedunguter'
            });
var format_TitikFasilitasUmum_30 = new ol.format.GeoJSON();
var features_TitikFasilitasUmum_30 = format_TitikFasilitasUmum_30.readFeatures(json_TitikFasilitasUmum_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikFasilitasUmum_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikFasilitasUmum_30.addFeatures(features_TitikFasilitasUmum_30);
var lyr_TitikFasilitasUmum_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikFasilitasUmum_30, 
                style: style_TitikFasilitasUmum_30,
                popuplayertitle: 'Titik Fasilitas Umum',
                interactive: true,
                title: '<img src="styles/legend/TitikFasilitasUmum_30.png" /> Titik Fasilitas Umum'
            });
var format_TitikEvakuasi_31 = new ol.format.GeoJSON();
var features_TitikEvakuasi_31 = format_TitikEvakuasi_31.readFeatures(json_TitikEvakuasi_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikEvakuasi_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikEvakuasi_31.addFeatures(features_TitikEvakuasi_31);
var lyr_TitikEvakuasi_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikEvakuasi_31, 
                style: style_TitikEvakuasi_31,
                popuplayertitle: 'Titik Evakuasi',
                interactive: true,
                title: '<img src="styles/legend/TitikEvakuasi_31.png" /> Titik Evakuasi'
            });
var format_BatasWilayahPerDesaKecamatanKabDemak_32 = new ol.format.GeoJSON();
var features_BatasWilayahPerDesaKecamatanKabDemak_32 = format_BatasWilayahPerDesaKecamatanKabDemak_32.readFeatures(json_BatasWilayahPerDesaKecamatanKabDemak_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasWilayahPerDesaKecamatanKabDemak_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasWilayahPerDesaKecamatanKabDemak_32.addFeatures(features_BatasWilayahPerDesaKecamatanKabDemak_32);
var lyr_BatasWilayahPerDesaKecamatanKabDemak_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasWilayahPerDesaKecamatanKabDemak_32, 
                style: style_BatasWilayahPerDesaKecamatanKabDemak_32,
                popuplayertitle: 'Batas Wilayah Per Desa/Kecamatan Kab. Demak',
                interactive: false,
                title: '<img src="styles/legend/BatasWilayahPerDesaKecamatanKabDemak_32.png" /> Batas Wilayah Per Desa/Kecamatan Kab. Demak'
            });
var group_RuteEvakuasi = new ol.layer.Group({
                                layers: [lyr_wonowosoLapangansepakbola_9,lyr_WonoAgungSMPNegeri3Bonang_10,lyr_TuguMasjidKedunguter_11,lyr_Tridonorejomushollaalfalah_12,lyr_timbulslokomasjidKedunguter_13,lyr_tambakbulusantkkartikaputra_14,lyr_surodadiSMPNegeri3Bonang_15,lyr_SidorejoMasjidBaitulMutaqqin_16,lyr_seklentingmasjidBesarAlfalah_17,lyr_PengkolMushollahalfalah_18,lyr_MorodemakMushollaalfalah_19,lyr_MargoLindukMushollaalfalah_20,lyr_LoirengPuskesmasSayungII_21,lyr_JogoMasjidkedunguter_22,lyr_GojoyoMasjidbesarAlFalah_23,lyr_GebangArumTKKartikaPutra_24,lyr_GebangMushollaalfalah_25,lyr_BetahwalangPuskesmasBonangII_26,lyr_BedongMasjidBLengkong_27,lyr_BanjarSariTKKartikaPutra_28,lyr_BadongMasjidKedunguter_29,],
                                fold: 'close',
                                title: 'Rute Evakuasi'});
var group_ServiceAreaFasilitasUmum = new ol.layer.Group({
                                layers: [lyr_4500_4,lyr_3000_5,lyr_1500_6,],
                                fold: 'close',
                                title: 'Service Area Fasilitas Umum'});
var group_PetaNDWIKabDemak = new ol.layer.Group({
                                layers: [lyr_PETANDWIKABDEMAKTAHUN2014_1,lyr_PETANDWIKABDEMAKTAHUN2024_2,],
                                fold: 'close',
                                title: 'Peta NDWI Kab. Demak'});
var group_MentahanBuffer = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Mentahan Buffer'});

lyr_OpenStreetMap_0.setVisible(true);lyr_PETANDWIKABDEMAKTAHUN2014_1.setVisible(true);lyr_PETANDWIKABDEMAKTAHUN2024_2.setVisible(true);lyr_DeliniasiKabDemak_3.setVisible(true);lyr_4500_4.setVisible(true);lyr_3000_5.setVisible(true);lyr_1500_6.setVisible(true);lyr_JalanDemak_7.setVisible(true);lyr_BadanAir_8.setVisible(true);lyr_wonowosoLapangansepakbola_9.setVisible(true);lyr_WonoAgungSMPNegeri3Bonang_10.setVisible(true);lyr_TuguMasjidKedunguter_11.setVisible(true);lyr_Tridonorejomushollaalfalah_12.setVisible(true);lyr_timbulslokomasjidKedunguter_13.setVisible(true);lyr_tambakbulusantkkartikaputra_14.setVisible(true);lyr_surodadiSMPNegeri3Bonang_15.setVisible(true);lyr_SidorejoMasjidBaitulMutaqqin_16.setVisible(true);lyr_seklentingmasjidBesarAlfalah_17.setVisible(true);lyr_PengkolMushollahalfalah_18.setVisible(true);lyr_MorodemakMushollaalfalah_19.setVisible(true);lyr_MargoLindukMushollaalfalah_20.setVisible(true);lyr_LoirengPuskesmasSayungII_21.setVisible(true);lyr_JogoMasjidkedunguter_22.setVisible(true);lyr_GojoyoMasjidbesarAlFalah_23.setVisible(true);lyr_GebangArumTKKartikaPutra_24.setVisible(true);lyr_GebangMushollaalfalah_25.setVisible(true);lyr_BetahwalangPuskesmasBonangII_26.setVisible(true);lyr_BedongMasjidBLengkong_27.setVisible(true);lyr_BanjarSariTKKartikaPutra_28.setVisible(true);lyr_BadongMasjidKedunguter_29.setVisible(true);lyr_TitikFasilitasUmum_30.setVisible(true);lyr_TitikEvakuasi_31.setVisible(true);lyr_BatasWilayahPerDesaKecamatanKabDemak_32.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_PetaNDWIKabDemak,lyr_DeliniasiKabDemak_3,group_ServiceAreaFasilitasUmum,lyr_JalanDemak_7,lyr_BadanAir_8,group_RuteEvakuasi,lyr_TitikFasilitasUmum_30,lyr_TitikEvakuasi_31,lyr_BatasWilayahPerDesaKecamatanKabDemak_32];
lyr_DeliniasiKabDemak_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_4500_4.set('fieldAliases', {'Nama': 'Nama', 'SrviceArea': 'SrviceArea', 'zona': 'zona', });
lyr_3000_5.set('fieldAliases', {'Nama': 'Nama', 'SrviceArea': 'SrviceArea', 'zona': 'zona', });
lyr_1500_6.set('fieldAliases', {'Nama': 'Nama', 'SrviceArea': 'SrviceArea', 'zona': 'zona', });
lyr_JalanDemak_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'level': 'level', 'informal': 'informal', 'horse': 'horse', 'ford': 'ford', 'tunnel': 'tunnel', 'tracktype': 'tracktype', 'descriptio': 'descriptio', 'placement': 'placement', 'covered': 'covered', 'check_date': 'check_date', 'constructi': 'constructi', 'embankment': 'embankment', 'man_made': 'man_made', 'flood_pron': 'flood_pron', 'service': 'service', 'lanes_forw': 'lanes_forw', 'lanes_back': 'lanes_back', 'import': 'import', 'truck': 'truck', 'foot': 'foot', 'bicycle': 'bicycle', 'motor_vehi': 'motor_vehi', 'access': 'access', 'junction': 'junction', 'maxspeed': 'maxspeed', 'destinatio': 'destinatio', 'destinat_1': 'destinat_1', 'motorcar': 'motorcar', 'layer': 'layer', 'bridge': 'bridge', 'width': 'width', 'surface': 'surface', 'smoothness': 'smoothness', 'motorcycle': 'motorcycle', 'ref': 'ref', 'oneway': 'oneway', 'name': 'name', 'lanes': 'lanes', });
lyr_BadanAir_8.set('fieldAliases', {'id': 'id', });
lyr_wonowosoLapangansepakbola_9.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_WonoAgungSMPNegeri3Bonang_10.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_TuguMasjidKedunguter_11.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_Tridonorejomushollaalfalah_12.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_timbulslokomasjidKedunguter_13.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_tambakbulusantkkartikaputra_14.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_surodadiSMPNegeri3Bonang_15.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_SidorejoMasjidBaitulMutaqqin_16.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_seklentingmasjidBesarAlfalah_17.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_PengkolMushollahalfalah_18.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MorodemakMushollaalfalah_19.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_MargoLindukMushollaalfalah_20.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_LoirengPuskesmasSayungII_21.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_JogoMasjidkedunguter_22.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_GojoyoMasjidbesarAlFalah_23.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_GebangArumTKKartikaPutra_24.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_GebangMushollaalfalah_25.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_BetahwalangPuskesmasBonangII_26.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_BedongMasjidBLengkong_27.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_BanjarSariTKKartikaPutra_28.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_BadongMasjidKedunguter_29.set('fieldAliases', {'DIST_KM': 'DIST_KM', 'DURATION_H': 'DURATION_H', 'PROFILE': 'PROFILE', 'PREF': 'PREF', 'OPTIONS': 'OPTIONS', 'FROM_ID': 'FROM_ID', 'TO_ID': 'TO_ID', });
lyr_TitikFasilitasUmum_30.set('fieldAliases', {'Nama': 'Nama', 'SrviceArea': 'SrviceArea', 'Jangkuan': 'Jangkuan', 'Foto Fasum': 'Foto Fasum', });
lyr_TitikEvakuasi_31.set('fieldAliases', {'id': 'id', 'DUKUH/DESA': 'DUKUH/DESA', 'Foto Evac': 'Foto Evac', });
lyr_BatasWilayahPerDesaKecamatanKabDemak_32.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_DeliniasiKabDemak_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_4500_4.set('fieldImages', {'Nama': 'TextEdit', 'SrviceArea': 'TextEdit', 'zona': 'TextEdit', });
lyr_3000_5.set('fieldImages', {'Nama': 'TextEdit', 'SrviceArea': 'TextEdit', 'zona': 'TextEdit', });
lyr_1500_6.set('fieldImages', {'Nama': 'TextEdit', 'SrviceArea': 'TextEdit', 'zona': 'TextEdit', });
lyr_JalanDemak_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'level': 'TextEdit', 'informal': 'TextEdit', 'horse': 'TextEdit', 'ford': 'TextEdit', 'tunnel': 'TextEdit', 'tracktype': 'TextEdit', 'descriptio': 'TextEdit', 'placement': 'TextEdit', 'covered': 'TextEdit', 'check_date': 'TextEdit', 'constructi': 'TextEdit', 'embankment': 'TextEdit', 'man_made': 'TextEdit', 'flood_pron': 'TextEdit', 'service': 'TextEdit', 'lanes_forw': 'TextEdit', 'lanes_back': 'TextEdit', 'import': 'TextEdit', 'truck': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'motor_vehi': 'TextEdit', 'access': 'TextEdit', 'junction': 'TextEdit', 'maxspeed': 'TextEdit', 'destinatio': 'TextEdit', 'destinat_1': 'TextEdit', 'motorcar': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'width': 'TextEdit', 'surface': 'TextEdit', 'smoothness': 'TextEdit', 'motorcycle': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', });
lyr_BadanAir_8.set('fieldImages', {'id': 'TextEdit', });
lyr_wonowosoLapangansepakbola_9.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_WonoAgungSMPNegeri3Bonang_10.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_TuguMasjidKedunguter_11.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_Tridonorejomushollaalfalah_12.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_timbulslokomasjidKedunguter_13.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_tambakbulusantkkartikaputra_14.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_surodadiSMPNegeri3Bonang_15.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_SidorejoMasjidBaitulMutaqqin_16.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_seklentingmasjidBesarAlfalah_17.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_PengkolMushollahalfalah_18.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MorodemakMushollaalfalah_19.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_MargoLindukMushollaalfalah_20.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_LoirengPuskesmasSayungII_21.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_JogoMasjidkedunguter_22.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_GojoyoMasjidbesarAlFalah_23.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_GebangArumTKKartikaPutra_24.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_GebangMushollaalfalah_25.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_BetahwalangPuskesmasBonangII_26.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_BedongMasjidBLengkong_27.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_BanjarSariTKKartikaPutra_28.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_BadongMasjidKedunguter_29.set('fieldImages', {'DIST_KM': 'TextEdit', 'DURATION_H': 'TextEdit', 'PROFILE': 'TextEdit', 'PREF': 'TextEdit', 'OPTIONS': 'TextEdit', 'FROM_ID': 'TextEdit', 'TO_ID': 'TextEdit', });
lyr_TitikFasilitasUmum_30.set('fieldImages', {'Nama': 'TextEdit', 'SrviceArea': 'TextEdit', 'Jangkuan': 'TextEdit', 'Foto Fasum': 'ExternalResource', });
lyr_TitikEvakuasi_31.set('fieldImages', {'id': 'TextEdit', 'DUKUH/DESA': 'TextEdit', 'Foto Evac': 'ExternalResource', });
lyr_BatasWilayahPerDesaKecamatanKabDemak_32.set('fieldImages', {'KARKTR': 'TextEdit', 'STSBTS': 'TextEdit', 'FCODE': 'TextEdit', 'KELAS': 'TextEdit', 'UUPP': 'TextEdit', 'LOKASI': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'TextEdit', 'PJGBTS': 'TextEdit', 'KLBADM': 'TextEdit', 'TIPLOK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_DeliniasiKabDemak_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_4500_4.set('fieldLabels', {'Nama': 'no label', 'SrviceArea': 'no label', 'zona': 'no label', });
lyr_3000_5.set('fieldLabels', {'Nama': 'no label', 'SrviceArea': 'no label', 'zona': 'no label', });
lyr_1500_6.set('fieldLabels', {'Nama': 'no label', 'SrviceArea': 'no label', 'zona': 'no label', });
lyr_JalanDemak_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'level': 'no label', 'informal': 'no label', 'horse': 'no label', 'ford': 'no label', 'tunnel': 'no label', 'tracktype': 'no label', 'descriptio': 'no label', 'placement': 'no label', 'covered': 'no label', 'check_date': 'no label', 'constructi': 'no label', 'embankment': 'no label', 'man_made': 'no label', 'flood_pron': 'no label', 'service': 'no label', 'lanes_forw': 'no label', 'lanes_back': 'no label', 'import': 'no label', 'truck': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'motor_vehi': 'no label', 'access': 'no label', 'junction': 'no label', 'maxspeed': 'no label', 'destinatio': 'no label', 'destinat_1': 'no label', 'motorcar': 'no label', 'layer': 'no label', 'bridge': 'no label', 'width': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'motorcycle': 'no label', 'ref': 'no label', 'oneway': 'no label', 'name': 'no label', 'lanes': 'no label', });
lyr_BadanAir_8.set('fieldLabels', {'id': 'no label', });
lyr_wonowosoLapangansepakbola_9.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_WonoAgungSMPNegeri3Bonang_10.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_TuguMasjidKedunguter_11.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_Tridonorejomushollaalfalah_12.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_timbulslokomasjidKedunguter_13.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_tambakbulusantkkartikaputra_14.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_surodadiSMPNegeri3Bonang_15.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_SidorejoMasjidBaitulMutaqqin_16.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_seklentingmasjidBesarAlfalah_17.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_PengkolMushollahalfalah_18.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MorodemakMushollaalfalah_19.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_MargoLindukMushollaalfalah_20.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_LoirengPuskesmasSayungII_21.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_JogoMasjidkedunguter_22.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_GojoyoMasjidbesarAlFalah_23.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_GebangArumTKKartikaPutra_24.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_GebangMushollaalfalah_25.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_BetahwalangPuskesmasBonangII_26.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_BedongMasjidBLengkong_27.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_BanjarSariTKKartikaPutra_28.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_BadongMasjidKedunguter_29.set('fieldLabels', {'DIST_KM': 'no label', 'DURATION_H': 'no label', 'PROFILE': 'no label', 'PREF': 'no label', 'OPTIONS': 'no label', 'FROM_ID': 'no label', 'TO_ID': 'no label', });
lyr_TitikFasilitasUmum_30.set('fieldLabels', {'Nama': 'no label', 'SrviceArea': 'no label', 'Jangkuan': 'no label', 'Foto Fasum': 'no label', });
lyr_TitikEvakuasi_31.set('fieldLabels', {'id': 'no label', 'DUKUH/DESA': 'no label', 'Foto Evac': 'no label', });
lyr_BatasWilayahPerDesaKecamatanKabDemak_32.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_BatasWilayahPerDesaKecamatanKabDemak_32.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});