/** @format */

import { NextResponse } from "next/server";
import Post from "@/models/postModel";
import { connectToDb } from "@/database/connect";

const demoPosts = [
	{
		id: 1,
		title: "Beautiful Sunset",
		body: "The colors of the sunset were absolutely breathtaking. The sky was painted with hues of orange, pink, and purple. It was a magical moment that reminded me of the beauty of nature.",
		userName: "naturelover87",
		tag: "#sunset",
	},
	{
		id: 2,
		title: "Delicious Brunch",
		body: "Enjoyed a scrumptious brunch today with friends. We had fluffy pancakes, crispy bacon, and freshly brewed coffee. It was the perfect start to the weekend!",
		userName: "foodie4life",
		tag: "#brunch",
	},
	{
		id: 3,
		title: "Exploring the City",
		body: "Took a stroll through the bustling streets of the city today. The tall skyscrapers and vibrant street art added so much character to the urban landscape. Can't wait to discover more hidden gems!",
		userName: "wanderlust123",
		tag: "#citylife",
	},
	{
		id: 4,
		title: "Adventures in the Wilderness",
		body: "Spent the weekend hiking through dense forests and climbing steep mountains. The fresh air and stunning views made all the effort worthwhile. Nature truly is the best playground!",
		userName: "outdoorlover",
		tag: "#wilderness",
	},
	{
		id: 5,
		title: "Morning Serenity",
		body: "Woke up early to catch the sunrise by the lake. The calm waters and chirping birds created a serene atmosphere. It's moments like these that make life truly beautiful.",
		userName: "earlyriser",
		tag: "#morningvibes",
	},
	{
		id: 6,
		title: "A Day at the Beach",
		body: "Spent the whole day soaking up the sun and playing in the waves. Building sandcastles and collecting seashells brought back childhood memories. Can't wait to come back again!",
		userName: "beachbum",
		tag: "#beachlife",
	},
	{
		id: 7,
		title: "Artistic Expression",
		body: "Visited an art gallery today and was blown away by the talent on display. The paintings and sculptures were thought-provoking and inspired me to unleash my own creativity.",
		userName: "artlover",
		tag: "#artistic",
	},
	{
		id: 8,
		title: "Cozy Reading Corner",
		body: "Cuddled up in my favorite armchair with a good book and a warm cup of tea. Escaping into different worlds through the pages is my idea of a perfect evening.",
		userName: "bookworm",
		tag: "#reading",
	},
	{
		id: 9,
		title: "Epic Road Trip",
		body: "Embarked on an epic road trip across the country. The long drives, stunning landscapes, and spontaneous adventures made it an unforgettable journey. Can't wait for the next one!",
		userName: "adventureseeker",
		tag: "#roadtrip",
	},
	{
		id: 10,
		title: "Magical Winter Wonderland",
		body: "The snow-covered landscapes and twinkling lights created a magical atmosphere. Ice skating, building snowmen, and sipping hot cocoa made winter my favorite season.",
		userName: "winterlover",
		tag: "#winterwonderland",
	},
	{
		id: 11,
		title: "Culinary Adventures",
		body: "Explored a variety of cuisines today, from sushi to pasta to spicy street food. The flavors and aromas took my taste buds on a delicious journey around the world.",
		userName: "foodexplorer",
		tag: "#foodadventures",
	},
	{
		id: 12,
		title: "Sun-Kissed Memories",
		body: "Spent a day at the beach, basking in the warm sunshine and feeling the sand between my toes. Building sandcastles, playing beach volleyball, and swimming in the clear blue water made it a perfect summer getaway.",
		userName: "beachlover",
		tag: "#sunshine",
	},
	{
		id: 13,
		title: "Incredible Wildlife",
		body: "Went on a safari and got up close with majestic animals in their natural habitat. Witnessing lions, elephants, and giraffes roaming freely was a humbling and awe-inspiring experience.",
		userName: "wildlifephotographer",
		tag: "#safari",
	},
	{
		id: 14,
		title: "Urban Jungle",
		body: "Explored the vibrant streets of a bustling city. The towering skyscrapers, colorful murals, and lively atmosphere made me feel like I was in a concrete jungle.",
		userName: "cityexplorer",
		tag: "#urban",
	},
	{
		id: 15,
		title: "Unforgettable Concert",
		body: "Attended an electrifying concert that had everyone dancing and singing along. The energy of the crowd and the talented performances made it a night to remember.",
		userName: "musiclover",
		tag: "#concert",
	},
	{
		id: 16,
		title: "Peaceful Retreat",
		body: "Escaped to a cozy cabin in the woods. Surrounded by towering trees and the soothing sounds of nature, it was the perfect place to relax, recharge, and find inner peace.",
		userName: "retreatseeker",
		tag: "#getaway",
	},
	{
		id: 17,
		title: "Capturing Moments",
		body: "Took my camera on a photography expedition and captured breathtaking landscapes, candid portraits, and unique perspectives. Each photo tells a story and freezes a moment in time.",
		userName: "shutterbug",
		tag: "#photography",
	},
	{
		id: 18,
		title: "Timeless Architecture",
		body: "Explored historic landmarks and marveled at the intricate architecture. From ancient temples to grand cathedrals, the craftsmanship and beauty stood the test of time.",
		userName: "historybuff",
		tag: "#architecture",
	},
];

export const GET = async (req, res) => {
	try {
		await connectToDb();
		const posts = await Post.find();
		return new NextResponse(JSON.stringify(posts));
	} catch (error) {
		console.log(error.message)
	}
};
