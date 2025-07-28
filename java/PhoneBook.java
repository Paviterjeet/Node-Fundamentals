//Complete this code or write your own from scratch
import java.util.*;
import java.io.*;

class PhoneBook{
	public static void main(String []argh)
	{
		Scanner in = new Scanner(System.in);
		int n=in.nextInt();
		 in.nextLine();
        HashMap<String, String> phoneBook= new HashMap<String , String>();
        
		for(int i=0;i<n;i++)
		{
            String key= in.nextLine();
			phoneBook.put(key,in.nextInt()+"");
			in.nextLine();
		}
        while(in.hasNext()){
          
            String s=in.nextLine();
            if(phoneBook.get(s)!=null){
                System.out.println(s+"="+phoneBook.get(s));
            }else{
                System.out.println("Not found");
            }
        }
        in.close();
		
	}
}



