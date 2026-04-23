const {uuid,varchar,pgTable,text}=require("drizzle-orm/pg-core");
const authorsTable=pgTable('authora',{
    id:uuid().primaryKey().defaultRandom(),
    firstname: varchar({length:55}).notNull(),
    lastname: varchar({length:55}),
    email: varchar({length:255}).notNull().unique(),
    



});
module.exports=authorsTable;