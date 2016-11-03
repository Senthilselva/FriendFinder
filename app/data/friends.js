// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================
var FriendArray = [
	{
		name: 'Bill Clinton',
		photo: 'http://www.conservativedailyreview.com/wp-content/uploads/2016/08/Bill-Clinton.jpg',
		scores :[
		5,
	     1,
	     4,
	     4,
	     5,
	     1,
	     2,
	     5,
	     4,
	     1
		]
	}, {

	name: "Tim Raines",
	photo: "http://a.espncdn.com/photo/2013/0103/mlb_hof_favorites_04.jpg",
	scores: [
	5,
	1,
	4,
	4,
	5,
	1,
	2,
	5,
	4,
	1
	]
	},
	{
	name: "Donald Trump",
	photo: "http://static4.businessinsider.com/image/56c640526e97c625048b822a-480/donald-trump.jpg",
	scores: [
	4,
	2,
	5,
	1,
	3,
	2,
	2,
	1,
	3,
	2
	]
	},
	{
	name: "Selena Gomaz",
	photo: "http://www.1ohww.org/these-celebrities-have-lupus/",
	scores: [
	5,
	2,
	2,
	2,
	4,
	1,
	3,
	2,
	5,
	5
	]
	},
	{
	name: "Hillary Clinton",
	photo: "http://media.breitbart.com/media/2015/10/hillary-clinton-displeased-AP-640x480.jpg",
	scores: [
	3,
	3,
	4,
	2,
	2,
	1,
	3,
	2,
	2,
	3
	]
	},
	{
	name: "Flower is your Friend",
	photo: "http://weknowyourdreams.com/images/flowers/flowers-07.jpg",
	scores: [
	5,
	4,
	3,
	4,
	1,
	5,
	2,
	3,
	1,
	4
	]
	}

];

//console.log(FriendArray);
// Note how we export the array. This makes it accessible to other files using require.
module.exports = FriendArray;
