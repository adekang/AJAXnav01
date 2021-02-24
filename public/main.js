console.log("我是main.js")

// 请求CSS
getCss.onclick = () => {
	const request = new XMLHttpRequest()
	request.open("GET", "/style.css")
	request.onreadystatechange = () => {
		console.log(request.readyState)
		if (request.readyState === 4) {
			console.log("下载完成")
			// 成功的状态码在200-300以内 失败的状态码在300以上
			if (request.status >= 200 && request.status < 300) {
				const style = document.createElement("style")
				style.innerHTML = request.response
				document.head.appendChild(style)
			} else {
				alert("加载CSS失败")
			}
		}
	}

	request.send()
}

// 请求js
getJs.onclick = () => {
	const request = new XMLHttpRequest()
	request.open("GET", "/2.js")
	request.onreadystatechange = () => {
		console.log(request.readyState)
		if (request.readyState === 4) {
			console.log("下载完成")
			// 成功的状态码在200-300以内 失败的状态码在300以上
			if (request.status >= 200 && request.status < 300) {
				const script = document.createElement("script")
				script.innerHTML = request.response
				document.body.appendChild(script)
			} else {
				alert("加载JS失败")
			}
		}
	}

	request.send()
}

//请求HTML
getHtml.onclick = () => {
	const request = new XMLHttpRequest()
	request.open("GET", "/3.html")
	request.onreadystatechange = () => {
		console.log(request.readyState)
		if (request.readyState === 4) {
			console.log("下载完成")
			// 成功的状态码在200-300以内 失败的状态码在300以上
			if (request.status >= 200 && request.status < 300) {
				const div = document.createElement("div")
				div.innerHTML = request.response
				document.body.appendChild(div)
			} else {
				alert("加载HTML失败")
			}
		}
	}

	request.send()
}
//请求XML
getXml.onclick = () => {
	const request = new XMLHttpRequest()
	request.open("GET", "/4.xml")

	request.onreadystatechange = () => {
		if (request.readyState === 4) {
			console.log("下载完成")
			// 成功的状态码在200-300以内 失败的状态码在300以上
			if (request.status >= 200 && request.status < 300) {
				const dom = request.responseXML
				const text = dom.getElementsByTagName("warning")[0].textContent
				console.log(text.trim())
			} else {
				alert("加载XML失败")
			}
		}
	}
	request.send()
}

// 请求JSON
getJson.onclick = () => {
	const request = new XMLHttpRequest()
	request.open("GET", "/5.json")

	request.onreadystatechange = () => {
		if (request.readyState === 4) {
			console.log("下载完成")
			// 成功的状态码在200-300以内 失败的状态码在300以上
			if (request.status >= 200 && request.status < 300) {
				console.log(request.response)
				const obj = JSON.parse(request.response)
				myName.textContent = obj.name.toLocaleUpperCase()
			} else {
				alert("加载JSON失败")
			}
		}
	}
	request.send()
}
// 获取下一页
let n = 1
getPage.onclick = () => {
	const request = new XMLHttpRequest()
	request.open("GET", `/page${n + 1}.json`)

	request.onreadystatechange = () => {
		if (request.readyState === 4) {
			console.log("下载完成")
			// 成功的状态码在200-300以内 失败的状态码在300以上
			if (request.status >= 200 && request.status < 300) {
				console.log(request.response)
				const array = JSON.parse(request.response)
				array.forEach((item) => {
					const li = document.createElement("li")
					li.textContent = item.id
					xxx.appendChild(li)
				})
			} else {
				alert("加载page页面失败")
			}
			n += 1
		}
	}
	request.send()
}
