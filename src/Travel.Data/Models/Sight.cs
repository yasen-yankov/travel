namespace Travel.Data.Models
{
	public class Sight
    {
		public int Id { get; set; }

		public string Name { get; set; }

		public string Latitude { get; set; }

		public string Longitude { get; set; }

		public bool PartOfUnesco { get; set; }
	}
}