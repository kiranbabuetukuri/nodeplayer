const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema
} = require("graphql");

const SongType=require("./type-song")

const SongsModel=require("../../models/songs")


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            songs: {
                type: new GraphQLList(SongType),
                resolve: async(root, args, context, info) => {
		 console.log("SONGS")
				 	let _songs=await SongsModel.find().exec()
 					console.log("SONGS DONE")
                    return _songs// SongsModel.find().exec();
                }
            },
            song: {
                type: SongType,
                args: {
                    id: { type: new GraphQLNonNull(GraphQLID) }
                },
                resolve: (root, args, context, info) => {
                    //console.log(args.id)

                   //   return SongsModel.find().exec();
                  return SongsModel.findById(args.id).exec();
                }
            }
        }
    })
});
module.exports=schema