(function() {

    $('.ui.accordion').accordion();
    $('.ui.dropdown').dropdown();

    let BASEURI = "https://nyu.nekoyu.cc:6680";
    let $search = $("#search");
    let $D2A1 = $("#D2A1");
    let $D2A2 = $("#D2A2");
    let $A2D1 = $("#A2D1");
    let $A2D2 = $("#A2D2");

    function submission(option=null) {
        let text = $text.val().trim();
        if (!text) return;

        $search.addClass("loading");
        refresh();
    }

    function refresh() {
        let uri = `${BASEURI}/widgets/bus`;

        axios.get(uri)
             .then(function(response) {
                let data = response.data;
                $search.removeClass("loading");
                refreshList(data);
             })
             .then(function(error) {});
    }

    function refreshTime(timetable) {
        let html1 = `<div id="D2A1" class="item">${timetable.dorm2campus[0][0]},  ${timetable.dorm2campus[0][1]}</div>`;
        $D2A1.html(html1);
        let html2 = `<div id="D2A1" class="item">${timetable.dorm2campus[1][0]},  ${timetable.dorm2campus[1][1]}</div>`;
        $D2A2.html(html2);
        let html3 = `<div id="D2A1" class="item">${timetable.campus2dorm[0][0]},  ${timetable.campus2dorm[0][1]}</div>`;
        $A2D1.html(html3);
        let html4 = `<div id="D2A1" class="item">${timetable.campus2dorm[1][0]},  ${timetable.campus2dorm[1][1]}</div>`;
        $A2D2.html(html4);
    }
})();
