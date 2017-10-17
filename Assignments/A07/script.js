var band = { 
    "name" : "Samiam",
    "lineUp" : [
            {
                "name" : "Jason Beebout",
                "instrument" : "Vocals"
            },

            {
                "name": "Sergie Loobkoff",
                "instrument" : "Lead Guitar"
            },

            {
                "name" : "Sean Kennerly",
                "instrument" : "Rhythm Guitar"
            },
            
            {
                "name" : "Chad Darby",
                "instrument" : "Bass"
            },

            {
                "name" : "Colin Brooks",
                "instrument" : "Drums"
            }
    ],
    "discography" : [
            {
                "title" : "Samiam",
                "releaseDate" :"1990",
                "label": "New Red Archives"
            },

            {
                "title" : "Soar",
                "releaseDate" :"1991",
                "label": "New Red Archives"
            },

            {
                "title" : "Billy",
                "releaseDate" :"1992",
                "label": "New Red Archives"
            },

            {
                "title" : "Clumsy",
                "releaseDate" :"August 23, 1994",
                "label": "Atlantic"
            },

            {
                "title" : "You Are Freaking Me Out",
                "releaseDate" :"June 12, 1997",
                "label": "Ignition"
            },

            {
                "title" : "Astray",
                "releaseDate" :"August 29, 2000",
                "label": "Hopeless"
            },

            {
                "title" : "Whatever's Got You Down",
                "releaseDate" :"September 26, 2006",
                "label": "Hopeless" 
            },

            {
                "title" : "Trips",
                "releaseDate" :"September 6, 2011",
                "label": "Hopeless"
            }
    ]
}
$(document).ready(function()
{
    $("#button1").click(function()
    {
        alert(band.name);
    });

    $("#button2").click(function()
    {
        for (var i=0; i<band.lineUp.length; i++)
        {
            var group = band.lineUp[i];
            $("body").append(group.name + " " + "plays " + group.instrument + "." + "</br>");
        }
    });

    $("#button3").click(function()
    {
        for (var i=0; i<band.discography.length; i++)
        {
            var album = band.discography[i];
            $("body").append("Title: " + album.title + ", " + "Released: " + album.releaseDate + ", " + "Label: " +  album.label + "." + "</br>");
        }
    });
});
