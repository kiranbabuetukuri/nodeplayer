
const {
    GraphQLID,
    GraphQLString,  
    GraphQLObjectType,
    
} = require("graphql");

const SongType = new GraphQLObjectType({
    name: "KIRAN",
    fields: {
        id: { type: GraphQLID },
		title: { type: GraphQLString },
		message: { type: GraphQLString },		
		displayName: { type: GraphQLString },
		email: { type: GraphQLString },		
        media: { type: GraphQLString },
		cover: { type: GraphQLString },
		coverFormat: { type: GraphQLString },
		artist: { type: GraphQLString },
			folder: { type: GraphQLString }
    }
});
module.exports =SongType