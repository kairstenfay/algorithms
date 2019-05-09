import java.util.*;

public class Percolation {

   private int[][] grid;

   // create n-by-n grid, with all sites blocked
   public Percolation(int n) {
        grid = new int[n][n];

        for (int i = 0; i < n; i++) {
            grid[i] = new int[n];
        }

   }

   // open site (row, col) if it is not open already
   public void open(int row, int col) {

   }

   // is site (row, col) open?
   public boolean isOpen(int row, int col) {
      return false;
   }

   // is site (row, col) full?
   public boolean isFull(int row, int col) {
      return false;
   }

   // number of open sites
   public int numberOfOpenSites() {
      return 0;
   }

   // does the system percolate?
   public boolean percolates() {
      return false;
   }

   public String toString() {
       String result = "";
       for (int i = 0; i < grid.length; i++) {
           result += Arrays.toString(grid[i]) + "\n";
       }
       return result;
   }

   // test client (optional)
   public static void main(String[] args) {
      Percolation perc = new Percolation(4);
      System.out.println(perc);
   }
}