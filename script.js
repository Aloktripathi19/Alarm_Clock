let dr = document.getElementById("d1")
        let ddr = document.getElementById("d2")
        let ar = document.getElementById("alarm")
        let sr = document.getElementById("amPm")
        let ir = document.getElementsByTagName("input")

        function fun(input) {
            if (input.value.length === 1) {
                input.value = '0' + input.value
            }
        }
        function clock() {
            let t = new Date()
            let date = t.toLocaleDateString('en-CA')
            let t1 = t.getHours() % 12 || 12
            let t2 = t.getMinutes()
            t1 = t1 < 10 ? "0" + t1 : t1
            t2 = t2 < 10 ? "0" + t2 : t2

            dr.innerHTML = t.toLocaleTimeString()

            let time = t1 + ":" + t2 + " " + (t.getHours() >= 12 ? "PM" : "AM")
            let time1 = ir[1].value + ":" + ir[2].value + " " + sr.value

            if (time == time1 && ir[0].value == date) {
                ar.play()
                ar.volume = 0.5
            }
        }
        setInterval(clock, 1000);

        function set() {
            let h = ir[1].value
            let m = ir[2].value
            let ap = sr.value
            ar.src="ringtone.wav"
            if (h == "" || m == "" || ap == "") {
                alert("fill the values")
                return
            }

            let al = h + ':' + m + ' ' + ap
            ddr.innerHTML = ir[0].value + " at " + al
        }

        function stop() {
            ar.pause()
            ar.currentTime = 0
            ar.src=""
        }