
		// 党政爱国题库
		var content01 = [{
				topic: "五四运动标志着中国（）？",
				select: {
					A: "A、封建主义的寿终正寝",
					B: "B、新民主主义革命的开端",
					C: "C、共产党走上历史舞台",
					D: "D、资产阶级革命的转变"
				},
				answer: "B",
			},
			{
				topic: "以下没有参加中国共产党第一次全国代表大会的是（）？",
				select: {
					A: "A、陈独秀",
					B: "B、毛泽东",
					C: "C、董必武",
					D: "D、李达"
				},
				answer: "A",
			}, {
				topic: "1935年1月，中国中央政治局在长征途中举行（）？",
				select: {
					A: "A、遵义会议",
					B: "B、俄界会议",
					C: "C、洛川会议",
					D: "D、古田会议"
				},
				answer: "A",
			}
		];

		// 题库
		var content02 = [{
			topic: "中国共产党领导下的第一个农民运动是什么（）？",
			select: {
				A: "A、黄麻起义",
				B: "B、南昌起义",
				C: "C、百色起义",
				D: "D、秋收起义"
			},
			answer: "D",
		}, {
			topic: "中国共产党领导下的第一个工人运动是什么（）？",
			select: {
				A: "A、香港海员罢工",
				B: "B、广州沙面罢工",
				C: "C、上海五卅运动",
				D: "D、汉口租界罢工"
			},
			answer: "C",
		}, {
			topic: "中国共产党领导下的抗日战争胜利纪念日是哪一天（）？",
			select: {
				A: "A、8月15日",
				B: "B、9月3日",
				C: "C、10月1日",
				D: "D、12月13日"
			},
			answer: "B",
		}];



		// 查找（开始、答案）按钮
		var begin = document.getElementById("begin"); // 开始
		var answer = document.getElementById("answer"); // 答案

		// 获取两个题区放题目的span标签
		var topic01 = document.getElementById("topic01");
		var topic02 = document.getElementById("topic02");

		// 获取两个题区放答案的span标签
		var A1 = document.getElementById("A1");
		var B1 = document.getElementById("B1");
		var C1 = document.getElementById("C1");
		var D1 = document.getElementById("D1");
		var A2 = document.getElementById("A2");
		var B2 = document.getElementById("B2");
		var C2 = document.getElementById("C2");
		var D2 = document.getElementById("D2");

		// 禁用答案按钮
		answer.disabled = true;

		// 点击开始按钮
		begin.onclick = () => {
			// 当前按钮的value值为开始，则进行开始的一系列操作
			if (begin.value == '开始随机选题') {
				begin.value = '暂停';

				// 清除正确答案的样式  移除class
				A1.classList.remove("correct_answer");
				B1.classList.remove("correct_answer");
				C1.classList.remove("correct_answer");
				D1.classList.remove("correct_answer");
				A2.classList.remove("correct_answer");
				B2.classList.remove("correct_answer");
				C2.classList.remove("correct_answer");
				D2.classList.remove("correct_answer");

				// 判断数组中是否只剩最后一题，是的话则不用点击暂停就可以直接点击答案
				if (content01.length == 1 || content02.length == 1) {
					answer.disabled = false;
					begin.disabled = false;
				}

				let fn = () => {
					// 根据题库数组的长度获取随机数，有两个题库，两种题型
					var content01_index = parseInt(Math.random() * content01.length);
					var content02_index = parseInt(Math.random() * content02.length);

					// 1题区题目内容 = 党政爱国题库里面随机的一个题目
					topic01.innerText = content01[content01_index].topic;
					// 2题区题目内容 = 互联网题库里面随机的一个题目
					topic02.innerText = content02[content02_index].topic;

					// 1题区内容的答案
					A1.innerText = content01[content01_index].select.A;
					B1.innerText = content01[content01_index].select.B;
					C1.innerText = content01[content01_index].select.C;
					D1.innerText = content01[content01_index].select.D;
					// 2题区内容的答案
					A2.innerText = content02[content02_index].select.A;
					B2.innerText = content02[content02_index].select.B;
					C2.innerText = content02[content02_index].select.C;
					D2.innerText = content02[content02_index].select.D;

					// 点击答案按钮
					answer.onclick = () => { // 第一次点击答案按钮，出第一题的答案
						// 为什么需要做这个判断呢？ 因为需要出两次答案，需点击两次按钮
						if (answer.name == 'one') {
							answer.name = 'two';
							// content01[content01_index].answer 获取当前题目的正确答案
							// 此处为什么+1呢？ 因为html中给答案标签命名为A1.A2.B1.B2
							var answer1 = document.getElementById(content01[content01_index].answer + "1");
							// 给正确答案添加class属性，该class写好了正确答案的样式
							answer1.className = 'correct_answer';

						} else { // 第二次点击答案按钮，出第二题的答案
							answer.name = 'one';
							var answer2 = document.getElementById(content02[content02_index].answer + "2");
							answer2.className = 'correct_answer';

							// 禁用答案按钮、启用开始按钮
							answer.disabled = true;
							begin.disabled = false;

							// 题目不能出现第二次，所以将随机出来的这题从数组中移除
							content01.splice(content01_index, 1); // splice()第一个参数：从第几个元素开始删，第二个参数：删几个元素
							content02.splice(content02_index, 1);

							// 判断一下是否还有题目，没有则将开始、答案按钮都禁用掉
							if (content01.length == 0 || content02.length == 0) {
								// disabled=true 是开启禁用的意思
								answer.disabled = true;
								begin.disabled = true;
							}
						}
					}
				}
				// 让题目晃动起来，一直调用此方法，使用计时器
				timer = setInterval(fn, 2);
			} else { // 点击暂停
				// 将按钮value值改为开始
				begin.value = '开始随机选题';
				// 点击暂停就清除计时器
				clearInterval(timer);
				// 启用答案按钮、禁用开始按钮
				answer.disabled = false;
				begin.disabled = true;
			}
		}
