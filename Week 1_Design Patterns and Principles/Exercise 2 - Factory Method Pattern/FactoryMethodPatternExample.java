interface Document {
    void content();
}

class pdfDocument implements Document {
    public void content() {
        System.out.println("This is a pdf document");
    }
}

class excelDocument implements Document {
    public void content() {
        System.out.println("This is an excel document");
    }
}

class wordDocument implements Document {
    public void content() {
        System.out.println("This is a word document");
    }
}

class DocumentFactory {
    public static Document createDocument(String docFormat) {
        if (docFormat.equalsIgnoreCase("pdf")) {
            return new pdfDocument();
        }
        if (docFormat.equalsIgnoreCase("excel")) {
            return new excelDocument();
        }
        if (docFormat.equalsIgnoreCase("word")) {
            return new wordDocument();
        } else {
            return null;
        }
    }
}

public class FactoryMethodPatternExample {
    public static void main(String[] args) {
        DocumentFactory factory = new DocumentFactory();

        Document pdfDoc = factory.createDocument("pdf");
        pdfDoc.content();
        Document wordDoc = factory.createDocument("word");
        wordDoc.content();
        Document excelDoc = factory.createDocument("excel");
        excelDoc.content();

    }
}
