function trans(){
				const maps = [
					['k(h|H)', 'x'],
					['K(h|H)', 'X'],
					['c(?!(h|H))|q', 'k'],
					['C(?!(h|H))|Q', 'K'],
					['t(r|R)|c(h|H)', 'c'],
					['T(r|R)|C(h|H)', 'C'],
					['d|g(i|I)|r', 'z'],
					['D|G(i|I)|R', 'Z'],
					['g(i|ì|í|ỉ|ĩ|ị|I|Ì|Í|Ỉ|Ĩ|Ị)', 'z$1'],
					['G(i|ì|í|ỉ|ĩ|ị|I|Ì|Í|Ỉ|Ĩ|Ị)', 'Z$1'],
					['đ', 'd'],
					['Đ', 'D'],
					['p(h|H)', 'f'],
					['P(h|H)', 'F'],
					['n(g|G)(h|H)?', 'q'],
					['N(g|G)(h|H)?', 'Q'],
					['(g|G)(h|H)', '$1'],
					['t(h|H)', 'w'],
					['T(h|H)', 'W'],
					['(n|N)(h|H)', '$1\'']
				];
				var input = document.getElementById("input").value;
				var res = input;
				for (var i=0;i<maps.length;i++){
					res = res.replace(new RegExp(maps[i][0], "g"),maps[i][1]);
				}
				document.getElementById("output").innerHTML = res;	
			}