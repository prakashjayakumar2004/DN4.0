import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Scanner;

class Product {
    int productID;
    String productName;
    String category;

    public Product(int productID, String productName, String category) {
        this.productID = productID;
        this.productName = productName;
        this.category = category;
    }

    public String toString() {
        return "ID: " + productID + ", Name: " + productName + ", Category: " + category;
    }
}


public class EcommerceSystem {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        ArrayList<Product> products = new ArrayList<>();
        products.add(new Product(1, "Bag", "Fashion"));
        products.add(new Product(2, "Headphones", "Electronics"));
        products.add(new Product(3, "Phone", "Electronics"));
        products.add(new Product(4, "Shoes", "Fashion"));
        products.add(new Product(5, "Shirt", "Fashion"));

        System.out.print("Enter product name to search: ");
        String searchName = sc.nextLine();

        Product resultLinear = linearSearch(products, searchName);
        if (resultLinear != null) {
            System.out.println("Product Found using linear search!");
            System.out.println(resultLinear);
        } else {
            System.out.println("Product not found using linear search!");
        }


        Collections.sort(products, Comparator.comparing(p -> p.productName));


        Product resultBinary = binarySearch(products, searchName);
        if (resultBinary != null) {
            System.out.println("Product Found using binary search!");
            System.out.println(resultBinary);
        } else {
            System.out.println("Product not found using binary search!");
        }
    }

    public static Product linearSearch(ArrayList<Product> products, String prodName) {
        for (Product p : products) {
            if (p.productName.equalsIgnoreCase(prodName)) {
                return p;
            }
        }
        return null;
    }

    public static Product binarySearch(ArrayList<Product> products, String prodName) {
        int left = 0;
        int right = products.size() - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            Product midProduct = products.get(mid);
            int comp = prodName.compareToIgnoreCase(midProduct.productName);

            if (comp == 0) {
                return midProduct;
            }

            if (comp > 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
}

