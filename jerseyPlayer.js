var playerDatabase = [
    {number: 0, name: '#0: Russell Westbrook, Point Guard for the Oklahoma City Thunder', image: 'http://a.fssta.com/content/dam/fsdigital/RSN/Southwest/2015/03/30/033015-SW-NBA-RussellWestrbook-PI.vadapt.980.high.28.jpg', highlight: 'https://www.youtube.com/embed/P_GPd9CDnOY'},
    {number: 1, name: '#1: Derrick Rose, Point Guard for the Chicago Bulls', image: 'http://rack.2.mshcdn.com/media/ZgkyMDE1LzA1LzA5LzZhL2RlcnJpY2tyb3NlLjdkNDVlLmpwZwpwCXRodW1iCTU2MHg3NTAKZQlqcGc/803f303a/638/derrick-rose-excited.jpg', highlight: "https://www.youtube.com/embed/dknjHBvlRLk"},
    {number: 2, name: '#2: Kawhi Leonard, Small Forward for the San Antonio Spurs', image: "http://cbssports.com/images/visual/whatshot/kawhi_dpoy_voting.jpg", highlight: "https://www.youtube.com/embed/BGnpDjHQAvI"},
    {number: 3, name: '#3: Chris Paul, Point Guard for the Los Angeles Clippers', image: "https://www.fanduel.com/insider/wp-content/uploads/2015/12/AP607045227111.jpg", highlight: "https://www.youtube.com/embed/V3K2mSWvyYU"},
    {number: 4, name: '#4: Chris Webber, Power Forward for the Sacramento Kings', image: "http://24.media.tumblr.com/tumblr_m0fouy4Tun1r31jjho1_500.jpg", highlight: "https://www.youtube.com/embed/CN2OLA7mSY4"},
    {number: 5, name: '#5: Bobby Portis, Power Forward for the Chicago Bulls', image: "http://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2015%2F1017%2Fr17757_1296x729_16-9.jpg", highlight: "https://www.youtube.com/embed/pzAbbS6KAI0"},
    {number: 6, name: '#6: LeBron James, Small Forward for the Miami Heat', image: "http://fullscalesports.com/wp-content/uploads/2011/12/LEbron-James-heat-Bulls.jpg", highlight: "https://www.youtube.com/embed/mSgMRrclOLI"}
 ]

var handlers = {
    submit: function() {
    var jerseyNumberInput = document.getElementById('jerseyNumberInput');
    view.displayImage();
    view.displayVideo();
    view.displayName();
    jerseyNumberInput.value = '';
    }
}

var view = {
    displayImage: function() {
        var imageParagraph = document.querySelector('p');
        imageParagraph.innerHTML = '';
        var imageToDisplay = document.createElement('img');
        imageToDisplay.src = playerDatabase[jerseyNumberInput.valueAsNumber].image;
        imageToDisplay.width = '560';
        imageToDisplay.height = '315';
        imageParagraph.appendChild(imageToDisplay);
    },
    displayVideo: function() {
        var videoParagraph = document.querySelector('p');
        var videoToDisplay = document.createElement('iframe');
        videoToDisplay.src = playerDatabase[jerseyNumberInput.valueAsNumber].highlight;
        videoToDisplay.width = '560';
        videoToDisplay.height = '315';
        videoToDisplay.frameborder = '0';
        videoToDisplay.frameborder="0";
        videoToDisplay.setAttribute('allowfullscreen','');
        videoParagraph.appendChild(videoToDisplay);
    },
    displayName: function() {
        var nameParagraph = document.querySelector('#info');
        nameParagraph.innerHTML = '';
        var nameToDisplay = document.createElement('h3');
        nameToDisplay.textContent = playerDatabase[jerseyNumberInput.valueAsNumber].name;
        nameParagraph.appendChild(nameToDisplay);
    }
}