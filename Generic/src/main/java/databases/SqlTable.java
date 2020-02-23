package databases;

import java.util.ArrayList;
import java.util.List;

public class SqlTable {
    public static List<String> searchElements(){
        List<String> elements=new ArrayList<String>();
        elements.add("iPhone");
        elements.add("Samsung");
        elements.add("htc");
        return elements;
    }

    public static int[] name={1,4,5,6};


    public static void main(String[] args) throws Exception {

        System.out.println(searchElements());
        ConnectToSqlDB.insertDataFromArrayListToSqlTable(searchElements(),"Junaid","search");
        //ConnectToSqlDB.insertDataFromArrayToSqlTable(name,"names","st");

        System.out.println(ConnectToSqlDB.readDataBase("Junaid","search"));
    }

}
