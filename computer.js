function Random_Position(){
	switch(Math.round(Math.random()*10)){
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 9:
			for (let a = 0;a<100;a++){
				document.getElementById("hihi").innerHTML = document.getElementById("hihi").innerText+"Đjt Mẹ Mày "
			}
			break
	}
}

function Random_String(){
	Random_List=[
		"Đố Anh Bắt Được Em",
		"Không Bắt Được Làm Chó",
		"Tuổi Gì Chạm Vào",
		"HIHIHIIHIHIHIH",
		"Mèo Méo Meo Mèo Meo",
		"Sắp Có Điều Bất Ngờ Rồi",
		"Cố Click Thêm Vài Lần Nữa",
		"HMMMM......."
	]
	return Random_List[~~Math.random()*8]
}