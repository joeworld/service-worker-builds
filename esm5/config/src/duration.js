/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var PARSE_TO_PAIRS = /([0-9]+[^0-9]+)/g;
var PAIR_SPLIT = /^([0-9]+)([dhmsu]+)$/;
export function parseDurationToMs(duration) {
    var matches = [];
    var array;
    while ((array = PARSE_TO_PAIRS.exec(duration)) !== null) {
        matches.push(array[0]);
    }
    return matches
        .map(function (match) {
        var res = PAIR_SPLIT.exec(match);
        if (res === null) {
            throw new Error("Not a valid duration: " + match);
        }
        var factor = 0;
        switch (res[2]) {
            case 'd':
                factor = 86400000;
                break;
            case 'h':
                factor = 3600000;
                break;
            case 'm':
                factor = 60000;
                break;
            case 's':
                factor = 1000;
                break;
            case 'u':
                factor = 1;
                break;
            default:
                throw new Error("Not a valid duration unit: " + res[2]);
        }
        return parseInt(res[1]) * factor;
    })
        .reduce(function (total, value) { return total + value; }, 0);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9zZXJ2aWNlLXdvcmtlci9jb25maWcvc3JjL2R1cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILElBQU0sY0FBYyxHQUFHLGtCQUFrQixDQUFDO0FBQzFDLElBQU0sVUFBVSxHQUFHLHNCQUFzQixDQUFDO0FBRTFDLE1BQU0sVUFBVSxpQkFBaUIsQ0FBQyxRQUFnQjtJQUNoRCxJQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7SUFFN0IsSUFBSSxLQUEyQixDQUFDO0lBQ2hDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRTtRQUN2RCxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hCO0lBQ0QsT0FBTyxPQUFPO1NBQ1QsR0FBRyxDQUFDLFVBQUEsS0FBSztRQUNSLElBQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQXlCLEtBQU8sQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxNQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2QsS0FBSyxHQUFHO2dCQUNOLE1BQU0sR0FBRyxRQUFRLENBQUM7Z0JBQ2xCLE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sTUFBTSxHQUFHLE9BQU8sQ0FBQztnQkFDakIsTUFBTTtZQUNSLEtBQUssR0FBRztnQkFDTixNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNmLE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDZCxNQUFNO1lBQ1IsS0FBSyxHQUFHO2dCQUNOLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQ1gsTUFBTTtZQUNSO2dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0NBQThCLEdBQUcsQ0FBQyxDQUFDLENBQUcsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsT0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQ25DLENBQUMsQ0FBQztTQUNELE1BQU0sQ0FBQyxVQUFDLEtBQUssRUFBRSxLQUFLLElBQUssT0FBQSxLQUFLLEdBQUcsS0FBSyxFQUFiLENBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5jb25zdCBQQVJTRV9UT19QQUlSUyA9IC8oWzAtOV0rW14wLTldKykvZztcbmNvbnN0IFBBSVJfU1BMSVQgPSAvXihbMC05XSspKFtkaG1zdV0rKSQvO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEdXJhdGlvblRvTXMoZHVyYXRpb246IHN0cmluZyk6IG51bWJlciB7XG4gIGNvbnN0IG1hdGNoZXM6IHN0cmluZ1tdID0gW107XG5cbiAgbGV0IGFycmF5OiBSZWdFeHBFeGVjQXJyYXl8bnVsbDtcbiAgd2hpbGUgKChhcnJheSA9IFBBUlNFX1RPX1BBSVJTLmV4ZWMoZHVyYXRpb24pKSAhPT0gbnVsbCkge1xuICAgIG1hdGNoZXMucHVzaChhcnJheVswXSk7XG4gIH1cbiAgcmV0dXJuIG1hdGNoZXNcbiAgICAgIC5tYXAobWF0Y2ggPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBQQUlSX1NQTElULmV4ZWMobWF0Y2gpO1xuICAgICAgICBpZiAocmVzID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOb3QgYSB2YWxpZCBkdXJhdGlvbjogJHttYXRjaH1gKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmFjdG9yOiBudW1iZXIgPSAwO1xuICAgICAgICBzd2l0Y2ggKHJlc1syXSkge1xuICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgZmFjdG9yID0gODY0MDAwMDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdoJzpcbiAgICAgICAgICAgIGZhY3RvciA9IDM2MDAwMDA7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdtJzpcbiAgICAgICAgICAgIGZhY3RvciA9IDYwMDAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICBmYWN0b3IgPSAxMDAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAndSc6XG4gICAgICAgICAgICBmYWN0b3IgPSAxO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm90IGEgdmFsaWQgZHVyYXRpb24gdW5pdDogJHtyZXNbMl19YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHJlc1sxXSkgKiBmYWN0b3I7XG4gICAgICB9KVxuICAgICAgLnJlZHVjZSgodG90YWwsIHZhbHVlKSA9PiB0b3RhbCArIHZhbHVlLCAwKTtcbn1cbiJdfQ==