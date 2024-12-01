using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ILP.Core.Data.Entities.Models
{
    public class Post : IEntity
    {
        [Key, Column("PostId")]
        public string Id { get; set; } = null!;
        [Required]
        public string Title { get; set; } = null!;
        public string? Description { get; set; }
        [Required]
        public DateTime CreatedDate { get; set; }
        [Required]
        [JsonIgnore]
        public string AuthorId { get; set; } = null!;
        public User Author { get; } = null!;
        [Required]
        public string GroupId {  get; set; } = null!;
        [JsonIgnore]
        public Group Group { get; set; } = null!;
        [JsonIgnore]
        public ICollection<Comment>? Comments { get; set; }
    }
}
